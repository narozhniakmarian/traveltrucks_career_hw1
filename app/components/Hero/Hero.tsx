import Link from "next/link";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.contentBox}>
          <div className={styles.titleBox}>
            <h1>HeroCampers of your dreams</h1>
            <p>You can find everything you want in our catalog</p>
          </div>
          <Link
            href="/catalog"
            className={styles.heroButton}
          >
            View Now
          </Link>
        </div>
      </div>
    </section>
  );
}
