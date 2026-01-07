import Image from 'next/image';
import styles from './Gallery.module.css';
import { GalleryImage } from '@/app/types/camper';

export function Gallery({ images }: { images: GalleryImage[] }) {
    return (
        <div className={styles.galleryGrid}>
            {images.map((img, index) => (
                <div key={index} className={styles.imageWrapper}>
                    <Image
                        src={img.original}
                        alt={`Camper gallery ${index}`}
                        fill
                        className={styles.image}
                        sizes="290px"
                    />
                </div>
            ))}
        </div>
    );
}
