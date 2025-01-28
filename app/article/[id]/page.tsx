import React from "react";
import Image from "next/image";
import { getArticleDetail } from "../../_libs/microcmsClient";

type Props = {
    params: {
        id: string;
    };
};

export default async function ArticleDetailPage({ params }: Props) {
    let article = null;

    try {
        article = await getArticleDetail(params.id);
            
    
    
    } catch (error) {
        console.error("Error fetching article detail:", error);
        return <div>Failed to load the article. Please try again later.</div>;
    }

    if (!article) {
        return <div>No article found.</div>;
    }

    return (
        <div className="article-detail">
            <h1>{article.title}</h1>
            <Image
                src="/ポーカーチップ計算機　イメージ画像.webp"
                alt="ポーカーチップ計算機　イメージ画像"
                width={400}
                height={400}
            />
            <div
                dangerouslySetInnerHTML={{
                    __html: article.content,
                }}
                className="article-content"
            />
        </div>
    );
}
