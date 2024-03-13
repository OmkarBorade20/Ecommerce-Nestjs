import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import { Product } from '../products/entities/product.entity';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

@Injectable()
export class OrdersService {
  constructor(
    @Inject(REQUEST) private readonly req: Request,
    @InjectRepository(Order) private oderRepository: Repository<Order>,
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    //fetch product based on product Id.
    let product = await this.productRepository.findBy({
      id: createOrderDto.productId,
    });

    if (product.length == 0)
      throw new NotFoundException(
        `Product Not Found For ID:${createOrderDto.productId}`,
      );

    let order: Order = new Order();
    order.user = this.req['user'];
    order.product = product[0];
    order.qty = createOrderDto.qty;
    order.price = product[0].price;
    order.total = createOrderDto.qty * product[0].price;
    return this.oderRepository.save(order);
  }

  findAll() {
    return this.oderRepository.find();
    // return this.oderRepository.find({relations:{
    //   product:true,
    //   user:true
    // }});
  }

  findOne(id: number) {
    return this.oderRepository.findBy({ orderID: id });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    let order: Order = new Order();
    order.orderID = id;

    //fetch the order from db.
    let order_old: Order[] = await this.oderRepository.find({
      where: { orderID: id },
      relations: {
        user: true,
        product: true,
      },
    });

    if (order_old.length == 0)
      throw new NotFoundException(`Order Id:${id} is Not Valid.`);

    order.qty = updateOrderDto.qty;
    order.price = order_old[0].product.price;
    order.total = updateOrderDto.qty * order_old[0].product.price;

    return this.oderRepository.save(order);
  }

  remove(id: number) {
    return this.oderRepository.delete(id);
  }
}
