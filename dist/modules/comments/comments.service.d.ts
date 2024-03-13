import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
import { Product } from '../products/entities/product.entity';
import { User } from '../users/entities/user.entity';
import { Request } from 'express';
export declare class CommentsService {
    private readonly req;
    private readonly commentRepository;
    private readonly productRepository;
    private readonly userRepository;
    constructor(req: Request, commentRepository: Repository<Comment>, productRepository: Repository<Product>, userRepository: Repository<User>);
    create(createCommentDto: CreateCommentDto): Promise<Comment>;
    findAll(): Promise<Comment[]>;
    findComments(req: Request): Promise<Comment[]>;
    findOne(id: number): Promise<Comment[]>;
    update(id: number, updateCommentDto: UpdateCommentDto): string;
    remove(id: number): string;
}
