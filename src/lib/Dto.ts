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

export type RegisterApiResponse = {
    data: string;
    errorMessage: string | null;
    status: number;
}

export type LoginApiResponse = {
    data: string;
    errorMessage: string | null;
    status: number;
}

export type ProfileInfoApiResponse = {
    data: {
        id: string;
        city: string;
        userName: string;
        email: string;
        phoneNumber: string;
        profileImage: string;
    },
    errorMessage: string | null;
    status: number
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

export type Reviews = {
    id: number;
    name: string;
    number: string;
    contentMsg:string;
    isPublic: string;
    stars: number;
    createdDate: string;
    carId: number;
    updatedDate: string | null;
}

export type SingleProductApiResponse = {
    data: {
        car: Car;
        user: {
          id: string;
          name: string;
          picture: string;
          phone: string;
        },
        reviews: Reviews[]
    };
    errorMessage: string | null;
    status: number;
}

export type SettingsApiResponse = {
    data: {
        siteName: string;
        favicon: string;
        logo: string;
        facebook: string;
        instagram: string;
        whatsapp: string;
        homeImg1: string;
        homeImg2: string;
        homeImg3: string;
        homeTxt1: string;
        homeTxt2: string;
        homeTxt3: string;
        description: string;
    };
    errorMessage: string | null;
    status: number;
}

export type AddCommentApiResponse = {
    data: string;
    errorMessage: string;
    status: number;
    isAdmin: boolean;
}