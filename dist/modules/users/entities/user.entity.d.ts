import { Comment } from "src/modules/comments/entities/comment.entity";
import { Address } from "src/modules/addresses/entities/address.entity";
export declare class User {
    id: number;
    name: string;
    age: number;
    gender: string;
    city: string;
    phone: string;
    email: string;
    password: string;
    role: string;
    comments: Comment[];
    addresses: Address[];
}
