import clsx from "clsx";
import Link from "next/link";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";
import { HeaderProps } from "../types/header";
import { NAV_LINKS } from "@/app/constants/navLinks";

export function Header() {
    const pathname = usePathname();

    function ActiveLink({ href, children, className }: HeaderProps) {
        const pathname = usePathname();
        const isActive = pathname === href || pathname.startsWith(href);

        return (
            <Link
                href={href}
                className={clsx(className, isActive && "active")}
            >
                {children}
            </Link>
        );
    }


    return (
        <header>
            <div className={clsx("container", styles.headContainer)}>
                <div className="logoBox">
                    <Link href="/" className={styles.logoLink}>
                        <svg>
                            <use href="svg/svg_spit.svg#icon-logo" />
                        </svg>
                    </Link>
                </div>

                <nav>
                    <ul className={styles.navList}>
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <ActiveLink href={link.href} className={styles.navLink}>
                                    {link.label}
                                </ActiveLink>
                            </li>
                        ))}
                    </ul>
                </nav>

            </div>
        </header>
    );
}