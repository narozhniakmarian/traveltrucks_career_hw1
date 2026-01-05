export interface Camper {
    id: string;
    name: string;
    price: number;
}

export interface CamperFilters {
    location?: string;
    form?: string;
    AC?: boolean;
    kitchen?: boolean;
}
