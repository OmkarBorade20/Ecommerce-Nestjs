import { Comment } from "src/modules/comments/entities/comment.entity";
export declare class Product {
    id: number;
    title: string;
    price: number;
    description: string;
    imgurl: string;
    comments: Comment[];
}
