import { ImageSourcePropType } from "react-native";

export interface GameTypes {
    id: number;
    title: string;
    price?: number;
    image: ImageSourcePropType;
}