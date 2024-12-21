import Link from 'next/link';
import style from './index.module.css';

export default function Footer() {
    return (
        <footer className={style.footer}>
                <nav className={style.nav}>
                    <ul className={style.items}>
                        <li className={style.item}>
                            <Link href="/news" >
                                ニュース
                            </Link>
                        </li>
                        <li className={style.item}>
                            <Link href="/members">
                                メンバー
                            </Link>
                        </li>
                        <li className={style.item}>
                            <Link href="/contact">
                                お問い合わせ
                            </Link>
                        </li>
                    </ul>
                </nav>
            <p className={style.cr}>©︎ SIMPLE. ALL Rights Reserved 2024</p>
        </footer>
    );
}