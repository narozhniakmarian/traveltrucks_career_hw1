import { Camper } from '@/app/types/camper';
import { IFeatureTag } from '../ui/IFeatureTag/IFeatureTag';
import { FeatureKey } from '@/app/constants/checkboxVariants';
import styles from './FeaturesPanel.module.css';

export function FeaturesPanel({ camper }: { camper: Camper }) {
    const tags: FeatureKey[] = [];
    if (camper.transmission === 'automatic') tags.push('automatic');
    if (camper.AC) tags.push('ac');
    if (camper.kitchen) tags.push('kitchen');
    if (camper.TV) tags.push('tv');
    if (camper.bathroom) tags.push('bathroom');
    if (camper.radio) tags.push('radio');
    if (camper.refrigerator) tags.push('fridge');
    if (camper.microwave) tags.push('microwave');
    if (camper.gas) tags.push('gas');
    if (camper.water) tags.push('water');

    return (
        <div className={styles.container}>
            <ul className={styles.tags}>
                {tags.map((tag) => (
                    <li key={tag}>
                        <IFeatureTag variant={tag} />
                    </li>
                ))}
            </ul>

            <div className={styles.details}>
                <h3 className={styles.title}>Vehicle details</h3>
                <div className={styles.line}></div>
                <ul className={styles.detailsList}>
                    <li className={styles.detailsItem}>
                        <span>Form</span>
                        <span className={styles.capitalize}>{camper.form?.replace(/([A-Z])/g, ' $1').trim()}</span>
                    </li>
                    <li className={styles.detailsItem}>
                        <span>Length</span>
                        <span>{camper.length}</span>
                    </li>
                    <li className={styles.detailsItem}>
                        <span>Width</span>
                        <span>{camper.width}</span>
                    </li>
                    <li className={styles.detailsItem}>
                        <span>Height</span>
                        <span>{camper.height}</span>
                    </li>
                    <li className={styles.detailsItem}>
                        <span>Tank</span>
                        <span>{camper.tank}</span>
                    </li>
                    <li className={styles.detailsItem}>
                        <span>Consumption</span>
                        <span>{camper.consumption}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
