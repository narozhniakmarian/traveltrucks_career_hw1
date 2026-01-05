'use client';


import Image from "next/image";
import { useRouter } from 'next/navigation';

import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();
  return (
    // <Header/>
    <main className={styles.main}>
      <h1>Campers for your perfect trip</h1>
      <p>Book a camper and explore the world with comfort.</p>
      <button onClick={() => router.push('/catalog')}>
        View Now
      </button>

    </main>
  );
}
