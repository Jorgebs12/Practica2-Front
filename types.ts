export type People = {
    name: string;
    email: string;
    sex: string;
    address: string;
};

export type City = {
    name: string;
    latitude: string;
    longitude: string;
    country: string;
    population: string;
};

export type CityResponse = City[];

export type Dog ={
    name: string;
    max_height_male: number;
    max_height_female: number;
    max_weight_male: number;
    max_weight_female: number;
    good_with_children: number;
    good_with_other_dogs: number;
    good_with_strangers: number;
    image_link: string;
};

export type DogResponse = Dog[];