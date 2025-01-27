import React from "react";
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
        console.log("Fetched Article Detail:", article); // デバッグログ
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
            <img
                src={article.eyecatch?.url || "/default-thumbnail.jpg"}
                alt={article.title}
                className="article-image"
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
