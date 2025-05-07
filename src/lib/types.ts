export type UserInfo = {
    userName: string;
    email: string;
    password: string;
    number: string;
    city: string;
}

export interface CarCardProps {
    id: number;
    imageUrl: string;
    brand: string;
    price: string;
    isNew: boolean;
    attributes: Record<string, string>; // {system: 'Automatic', model: 'Benz', ...}
    detailsLink: string;
}

export interface FetchProfile {
    id: string;
    city: string;
    userName: string;
    email: string;
    phoneNumber: string;
    profileImage: string;
}