import { getArticleDetail, getArticlesList } from "@/app/_libs/microcmsClient";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "@/app/_styles/globals.css";

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
            <h1>{article.title}</h1>
            {article.eyecatch && (
                <Image 
                    src ="/ポーカーチップ計算機　イメージ画像.webp"
                    alt="ポーカー　チップ計算機"
                    width={400}
                    height={400}
                />
            )}
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
            <Link href="/">
                ホームに戻る
            </Link>
        </div>
    );
}

// 動的パスを生成
export async function generateStaticParams() {
    const articles = await getArticlesList();

    return articles.contents.map((article) => ({
        id: article.id,
    }));
}

// ISRを設定
export const revalidate = 60; // 60秒ごとに再生成
