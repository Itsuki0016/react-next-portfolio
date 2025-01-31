import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./Blog.css";
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
            <h1 className="Article-title">Articles</h1>
            <ul className="articles-list">
                {articles.map((article) => (
                    <li key={article.id} className="article-item">
                        {/* Link全体を囲む */}
                        <Link href={`/article/${article.id}`} passHref>
                            <div>
                                <h2 className="article-title">{article.title}</h2>
                                <Image
                                    src={article.eyecatch?.url || "/no-image.png"}
                                    alt={article.title}
                                    width={400}
                                    height={300}
                                />
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
