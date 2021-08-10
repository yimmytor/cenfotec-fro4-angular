import { IFdcNutrient } from "./fdc-nutrient";

export interface IFdcFood {
    fdcId: number,
    description: string,
    foodNutrients: Array<IFdcNutrient>
}