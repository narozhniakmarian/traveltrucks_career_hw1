'use client';

import { useState } from 'react';
import { Camper } from '../types/camper';
import { FEATURES_MAP } from '@/app/constants/checkboxVariants';
import { IFeatureTag } from './ui/IFeatureTag/IFeatureTag';



interface Props {
    camper: Camper;
}

export function CamperTabs({ camper }: Props) {
    const [active, setActive] = useState<'features' | 'reviews'>('features')


    return (
        <div className="">
            {Object.entries(camper).map(([key, value]) => (
            const isParser = FEATURES_MAP[key] === true;
            if(!isParser)return null;

            return <IFeatureTag key={key} variant={key as FeatureKey} />
            ))}
        </div>
    )
}