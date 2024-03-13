import { Product } from 'src/modules/products/entities/product.entity';
import { User } from 'src/modules/users/entities/user.entity';
export declare class Comment {
    id: number;
    username: string;
    comment: string;
    created_on: Date;
    update_at: Date;
    product: Product;
    user: User;
}
