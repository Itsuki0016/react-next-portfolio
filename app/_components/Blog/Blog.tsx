import React from "react";
import Link from "next/link";
import { MicroCMSImage } from "microcms-js-sdk";

type Article = {
    id: string;
    title: string;
    eyecatch: MicroCMSImage | undefined;
};

type Props = {
    articles: Article[];
};

const Blogs: React.FC<Props> = ({ articles }) => {
    return (
        <section id="articles">
        <div className="articles-container">
            <h1>Articles</h1>
            <ul className="articles-list">
                {articles.map((article) => (
                    <li key={article.id} className="article-item">
                        {/* Link全体を囲む */}
                        <Link href={`/article/${article.id}`} passHref>
                            <div> 
                                <img
                                    src={article.eyecatch?.url || "/default-thumbnail.jpg"}
                                    alt={article.title}
                                    className="article-thumbnail"
                                />
                                <h2>{article.title}</h2>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        </section>
    );
};

export default Blogs;
