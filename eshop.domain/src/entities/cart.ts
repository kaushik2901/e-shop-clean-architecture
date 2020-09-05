import Product from "./product";

export interface CartProductRecord {
    id: string;
    product: Product;
    quantity: number;
}

export default interface Cart {
    id: string;
    userId: string;
    items: Array<CartProductRecord>
}