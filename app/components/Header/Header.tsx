import clsx from "clsx";
import Link from "next/link";
import styles from "./Header.module.css";

export function Header() {
    return (
        <header>
            <div className={clsx("container", styles.headContainer)}>
                <div className="logoBox">
                    <Link href="/" className={styles.logoLink}> <svg>
                        <use href="svg/svg_spit.svg#icon-logo" />
                    </svg></Link>
                </div>
                <nav>
                    <ul className="navLink">
                        <li><Link href="/" className={styles.navLink}>Home</Link></li>
                        <li><Link href="/catalog" className={styles.navLink}>Catalog</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}



