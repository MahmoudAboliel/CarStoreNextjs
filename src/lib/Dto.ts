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
    isDeleted?: boolean;
    color: string;
    country: string;
    city: string;
    createDate: string;
    updateDate: string;
    comments?: number;
}

export type RegisterApiResponse = {
    data: string;
    errorMessage: string | null;
    status: number;
    isAdmin: boolean;
}

export type LoginApiResponse = {
    data: string;
    errorMessage: string | null;
    status: number;
    isAdmin: boolean;
}

export type ProfileInfoApiResponse = {
    data: {
        id: string;
        city: string;
        fullName: string;
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
    userName: string;
    userId: string;
    updatedDate: string | null;
}
export type AddReviewApiResponse = {
    data: string;
    errorMessage: string;
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
          city: string;
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
}

export type Ad = {
    createDate: string;
    description: string;
    endDate: string;
    hit: number;
    id: number;
    imgName: string;
    name: string;
    startDate: string;
    status?: string;
    updateDate: string;
    url: string;
}
export type GetAdsApiResponse = {
    data: Ad[];
    errorMessage: string;
    status: number;
}

export type Users = {
    id: string;
    userName: string;
    email: string;
    roles: string[];
    number: string;
    city?: string;
    profileImg?: string;
    isActive: boolean;
    CreationDate: string;
    UpdatedDate: string;
}
export type GetusersApiResponse = {
    data: Users[];
    errorMessage: string;
    status: number;
}

export type MainInfo = {
    users: number | null;
    soldCars: number | null;
    existCars: number | null;
    approvedComments: number | null;
    commentsOnHold: number | null;
    ads: number | null;
}
export type GetMainInfoApiResponse = {
    data: MainInfo;
    errorMessage: string;
    status: number;
}

export type GetReviewsApiResponse = {
    data: Reviews[];
    errorMessage: string;
    status: number;
}