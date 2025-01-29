import { MicroCMSImage } from "microcms-js-sdk";
import Image from "next/image";
import Link from "next/link";


type Props = {
    title: string;
    content: string;
    eyecatch?: MicroCMSImage | undefined;
};

const Article: React.FC<Props> = ({ title, content, eyecatch }) => {
    return (
        <div>
            <h1>{title}</h1>
            {eyecatch && (
                <Image 
                    src ="/ポーカーチップ計算機　イメージ画像.webp"
                    alt="ポーカー　チップ計算機"
                    width={400}
                    height={400}
                />
            )}
            <div dangerouslySetInnerHTML={{ __html: content }} />
            <Link href="/">
                ホームに戻る
            </Link>
        </div>
    );
};

export default Article;
