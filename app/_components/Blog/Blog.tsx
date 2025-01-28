import React from "react";
import Link from "next/link";
import Image from "next/image";
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
                                <Image
                                    src="/ポーカーチップ計算機　イメージ画像.webp"
                                    alt="ポーカーチップ計算機　イメージ画像"
                                    width={400}
                                    height={400}
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
