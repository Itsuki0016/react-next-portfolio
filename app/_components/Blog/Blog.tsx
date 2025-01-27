import React from "react";
import Link from "next/link";
import { MicroCMSImage } from "microcms-js-sdk";
type Article = {
    id: string;
    title: string;
    eyecatch: MicroCMSImage | undefined
};
type Props = {
    articles: Article[];
};




const Blogs:React.FC<Props> = ({ articles}) => {
    return (
        <div className="articles-container">
            <h1>Articles</h1>
            <ul className="articles-list">
                {articles.map((article) => (
                    <li key={article.id} className="article-item">
                        <Link href={`/article/${article.id}`}>
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
};

export default Blogs;