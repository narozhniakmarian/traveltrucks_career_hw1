import clsx from "clsx";
import Link from "next/link";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/app/constants/navLinks";
import { HeaderProps } from "@/app/types/header";

export function Header() {
  const pathname = usePathname();

  function ActiveLink({ href, children, className }: HeaderProps) {
    const isActive = pathname === href || pathname.startsWith(href);

    return (
      <Link href={href} className={clsx(className, isActive && "active")}>
        {children}
      </Link>
    );
  }

  return (
    <header className="header">
      <div className={clsx("container", styles.headContainer)}>
        <div className="logoBox">
          <Link href="/" className={styles.logoLink}>
            <svg width={135} height={16}>
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
