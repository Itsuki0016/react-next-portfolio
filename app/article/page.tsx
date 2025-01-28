import React from "react";
import { getArticlesList } from "../_libs/microcmsClient";
import Blogs from "../_components/Blog/Blog";

export default async function Page() {
    const data = await getArticlesList();

    if (data.contents.length === 0) {
        return <div>No articles available.</div>;
    }
    const articles = data.contents.map((article) => (
        {
            id: article.id,
            title: article.title,
            eyecatch: article.eyecatch,
        }
    ));
    
    return {
        props: {
            articles: data.contents,
        },
        revalidata: 60,
    };

    return (
        <Blogs articles={articles} />
    )
}
