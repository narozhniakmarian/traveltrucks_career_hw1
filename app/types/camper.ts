export interface Camper {
  id: string;
  name?: string;
  price?: number;
}

export interface CamperFilters {
  location?: string;
  form?: string;
  AC?: boolean;
  kitchen?: boolean;
}

export interface CamperCardType {
  id: string;
  name: string;
  price: number;
  rating: number;
  description: string;
  tags: [];
  image: string;
  reviews: string;
  location: string;
}
