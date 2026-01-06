import { useRouter } from "next/navigation";
import { IButton } from "../ui/IButton/IButton";
import styles from "./Hero.module.css";

export function Hero() {
  const router = useRouter();
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.contentBox}>
          <div className={styles.titleBox}>
            <h1>HeroCampers of your dreams</h1>
            <p>You can find everything you want in our catalog</p>
          </div>
          <IButton
            variant="primary"
            type="button"
            onClick={() => router.push("/catalog")}
          >
            View Now
          </IButton>
        </div>
      </div>
    </section>
  );
}
