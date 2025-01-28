import { createClient } from "microcms-js-sdk";
import type { MicroCMSImage, MicroCMSListContent, MicroCMSQueries } from "microcms-js-sdk";

// 記事データ型
export type Article = {
    title: string;
    content: string;
    eyecatch?: MicroCMSImage;
} & MicroCMSListContent;

// MicroCMS クライアント作成
export const client = createClient({
    serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN || "react-next-portfolio",
    apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY || "",
});

// 記事一覧を取得
export const getArticlesList = async (queries?: MicroCMSQueries) => {
    try {
        console.log(
            "Fetching from URL:",
            `https://${process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN}.microcms.io/apis/v1/article/article`
        );

        const listData = await client.getList<Article>({
            endpoint: "article-endpoint", // エンドポイント名
            queries,
        });
        return listData;
    } catch (error: any) {
        console.error("Error fetching articles:", error.message);
        if (error.response) {
            console.error("Response Status:", error.response.status);
            console.error("Response Data:", error.response.data);
        }
        throw new Error("Failed to fetch articles.");
    }
};

// 記事詳細を取得
export const getArticleDetail = async (contentId: string, queries?: MicroCMSQueries) => {
    try {
        const detailData = await client.getListDetail<Article>({
            endpoint: "article-endpoint", // エンドポイント名
            contentId,
            queries,
        });
        return detailData;
    } catch (error: any) {
        console.error("Error fetching article detail:", error.message);
        if (error.response) {
            console.error("Response Status:", error.response.status);
            console.error("Response Data:", error.response.data);
        }
        throw new Error("Failed to fetch article detail.");
    }
};

