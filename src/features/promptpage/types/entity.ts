export interface LoggedInUser {
    email: string;
    username: string;
}

export interface DataResponse {
    _id: string;
    weatherCategory: string;
    occasionCategory: string;
    clothes: string;
    pants: string;
    shoe: string;
    description: string;
    imageOutfit: string;
}
