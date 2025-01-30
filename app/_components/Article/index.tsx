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
            <div dangerouslySetInnerHTML={{ __html: content }} />
            <Link href="/">
                ホームに戻る
            </Link>
        </div>
    );
};

export default Article;
