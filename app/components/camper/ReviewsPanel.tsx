import { Review } from '@/app/types/camper';
import { StarRating } from './StarRating';
import styles from './ReviewsPanel.module.css';

export function ReviewsPanel({ reviews }: { reviews: Review[] }) {
    return (
        <ul className={styles.list}>
            {reviews.map((review, index) => (
                <li key={index} className={styles.item}>
                    <div className={styles.header}>
                        <div className={styles.avatar}>
                            {review.reviewer_name.charAt(0).toUpperCase()}
                        </div>
                        <div className={styles.info}>
                            <p className={styles.name}>{review.reviewer_name}</p>
                            <StarRating rating={review.reviewer_rating} />
                        </div>
                    </div>
                    <p className={styles.comment}>{review.comment}</p>
                </li>
            ))}
        </ul>
    );
}
