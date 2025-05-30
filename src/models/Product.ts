export interface Product {
    id: number;
    name: string;
    mark: string;
    weightProd: string;
    dimensions: string;
    countryOrigin: string | null;
    modelNumber: string;
    color: string;
    material: string;
    cantParts: number;
    specialFeatures: string;
    componentsIncluded: string | null;
    urlImg: string;
    price: number;
    score: number;
}