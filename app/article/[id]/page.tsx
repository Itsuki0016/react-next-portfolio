import { getArticleDetail, getArticlesList } from "@/app/_libs/microcmsClient";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "@/app/_styles/globals.css";
import Article from "@/app/_components/Article";

type Props = {
    params: { id: string };
};

export default async function ArticleDetailPage({ params }: Props) {
    // 記事データを取得
    const article = await getArticleDetail(params.id);

    // 記事が見つからなかった場合のハンドリング
    if (!article) {
        return (
            <div>
                <p>記事が見つかりませんでした。</p>
                <Link href="/">
                    <a>ホームに戻る</a>
                </Link>
            </div>
        );
    }

    return (
        <div>
            <Article
                title={article.title}
                content={article.content}
                eyecatch={article.eyecatch}
            />
        </div>
    );
}


// ISRを設定
export const revalidate = 60; // 60秒ごとに再生成
