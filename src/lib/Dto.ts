export type Car = {
    id: number;
    userId: string;
    brand: string;
    model: string;
    status: string;
    kiloMetrage: number;
    transmission: string;
    fuel: string;
    engine: string;
    year: string;
    price: number;
    img1: string;
    img2: string;
    img3: string;
    description: string;
    sold: number;
    color: string;
    country: string;
    city: string;
    createDate: string;
    updateDate: string | null;
}

export type ProductsApiResponse = {
    data: Car[];
    errorMessage: string | null;
    status: number;
  }
  
export type CountApiResponse = {
    data: number;
    errorMessage: string | null;
    status: number;
}

export type SingleProductApiResponse = {
    data: {
        car: Car;
        user: {
            id: string;
            name: string;
            picture: string;
            phone: string;
        };
        Reviews: []
    },
    errorMessage: string | null;
    status: number;
}

export type ProfileInfoApiResponse = {
    data: {
        city: string;
        userName: string;
        email: string;
        phoneNumber: string;
        profileImage: string;
    },
    errorMessage: string | null;
    status: number
}