import Category from "./category";

export default interface Product {
    id: string;
    name: string;
    description: string;
    price: string;
    categories: Array<Category>;
    details: Map<string, string>;
}