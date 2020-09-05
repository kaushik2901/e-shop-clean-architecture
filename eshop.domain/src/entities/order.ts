import { OrderStatus } from './../enumerations/orderStatus';
import { CartProductRecord } from "./cart";

export default interface Cart {
    id: string;
    userId: string;
    status: OrderStatus;
    totalPrice: number;
    promoCode: string;
    discount: number;
    items: Array<CartProductRecord>
}