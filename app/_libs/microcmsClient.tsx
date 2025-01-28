import { createClient } from "microcms-js-sdk";
import type { MicroCMSImage, MicroCMSListContent, MicroCMSQueries, MicroCMSListResponse } from "microcms-js-sdk";

// 記事データ型
export type Article = {
    title: string;
    content: string;
    eyecatch?: MicroCMSImage;
} & MicroCMSListContent;


// MicroCMSクライアント作成
if (!process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN) {
    throw new Error("NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN is not defined");
}

if (!process.env.NEXT_PUBLIC_MICROCMS_API_KEY) {
    throw new Error("NEXT_PUBLIC_MICROCMS_API_KEY is not defined");
}

export const client = createClient({
    serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
});

// 記事一覧を取得
export const getArticlesList = async (queries?: MicroCMSQueries): Promise<MicroCMSListResponse<Article>> => {
    try {
        const listData = await client.getList<Article>({
            endpoint: "article-endpoint", // エンドポイント名
            queries,
            customRequestInit: {
                cache: "no-cache", // キャッシュを無効化
            },
        });
        return listData;
    } catch (error: any) {
        console.error("Error fetching articles:", error.message);
        return {
            contents: [],
            totalCount: 0,
            offset: 0,
            limit: 0,
        }; // デフォルト値を返す
    }
};

// 記事詳細を取得
export const getArticleDetail = async (contentId: string, queries?: MicroCMSQueries): Promise<Article | null> => {
    try {
        const detailData = await client.getListDetail<Article>({
            endpoint: "article-endpoint",
            contentId,
            queries,
            customRequestInit: {
                cache: "no-cache", // キャッシュを無効化
            },
        });
        return detailData;
    } catch (error: any) {
        console.error("Error fetching article detail:", error.message);
        return null; // エラー時はnullを返す
    }
};
