import React from "react";
import Link from "next/link";
import { getArticlesList } from "../../libs/microcmsClient";

export default async function ArticlesPage() {
    let articles = [];

    try {
        const { contents } = await getArticlesList();
        articles = contents;
        console.log("Fetched Articles:", articles); // デバッグログ
    } catch (error) {
        console.error("Error fetching articles:", error);
        return <div>Failed to load articles. Please try again later.</div>;
    }

    if (articles.length === 0) {
        return <div>No articles available.</div>;
    }

    return (
        <div className="articles-container">
            <h1>Articles</h1>
            <ul className="articles-list">
                {articles.map((article) => (
                    <li key={article.id} className="article-item">
                        <Link href={`/articles/${article.id}`}>
                            <div>
                                <img
                                    src={article.eyecatch?.url || "/default-thumbnail.jpg"}
                                    alt={article.title}
                                    className="article-thumbnail"
                                />
                                <h2>{article.title}</h2>
                                <p>No Category</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
