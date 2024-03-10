import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import { Product } from '../products/entities/product.entity';
import { Request } from 'express';
export declare class OrdersService {
    private readonly req;
    private oderRepository;
    private productRepository;
    constructor(req: Request, oderRepository: Repository<Order>, productRepository: Repository<Product>);
    create(createOrderDto: CreateOrderDto): Promise<Order>;
    findAll(): Promise<Order[]>;
    findOne(id: number): Promise<Order[]>;
    update(id: number, updateOrderDto: UpdateOrderDto): Promise<Order>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
