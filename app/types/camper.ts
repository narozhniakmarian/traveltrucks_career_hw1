export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  description: string;
  tags: string[];
  image: string;
  gallery?: GalleryImage[];
  reviews: Review[];
  location: string;
  AC?: boolean;
  TV?: boolean;
  bathroom?: boolean;
  kitchen?: boolean;
  radio?: boolean;
  refrigerator?: boolean;
  microwave?: boolean;
  gas?: boolean;
  water?: boolean;
  transmission?: string;
  engine?: string;
  form?: string;
}

export interface CamperFilters {
  location?: string;
  form?: string;
  AC?: boolean;
  ac?: boolean;
  automatic?: boolean;
  kitchen?: boolean;
  tv?: boolean;
  bathroom?: boolean;
  van?: boolean;
  fullyIntegrated?: boolean;
  alcove?: boolean;
}

export interface CamperCardType {
  id: string;
  name: string;
  price: number;
  rating: number;
  description: string;
  tags: string[];
  gallery?: GalleryImage[];
  image: string;
  reviews: Review[];
  location: string;
}

export type Review = {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
};

export type GalleryImage = {
  thumb: string;
  original: string;
};
