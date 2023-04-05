import { Star } from "./star";

export interface Hotel {
    id ?: number;
    name ?: string;
    img?: string;
    star?: Star;
    location? : number;
    priceHotel?: number;
}