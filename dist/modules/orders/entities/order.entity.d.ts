import { Product } from 'src/modules/products/entities/product.entity';
import { User } from 'src/modules/users/entities/user.entity';
export declare class Order {
    orderID: number;
    qty: number;
    price: number;
    total: number;
    product: Product;
    user: User;
    userId: number;
    productId: number;
}
