import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import { Product } from '../products/entities/product.entity';
import { NotFoundError } from 'rxjs';

@Injectable()
export class OrdersService {
  constructor(@InjectRepository(Order) private oderRepository :Repository<Order>,@InjectRepository(Product) private productRepository :Repository<Product>){}

  async create(createOrderDto: CreateOrderDto) {

    //fetch product based on product Id.
    let product=await this.productRepository.findBy({"id":createOrderDto.productId})

    if(product.length==0)
      throw new NotFoundError(`Product Not Found For ID:${createOrderDto.productId}`)

    let order:Order=new Order();
    order.userID=createOrderDto.userID;
    order.productId=createOrderDto.productId;  
    order.qty=createOrderDto.qty;
    order.price=product[0].price;
    order.total=createOrderDto.qty*product[0].price;
    return this.oderRepository.save(order)

  }

  findAll() {
    return this.oderRepository.find();
  }

  findOne(id: number) {
    return this.oderRepository.findBy({"orderID":id});
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {

    let order:Order=new Order();
    order.orderID=id;
    order.userID=updateOrderDto.userID;
    order.productId=updateOrderDto.productId;  
    order.qty=updateOrderDto.qty;
    order.price=updateOrderDto.price;
    order.total=updateOrderDto.qty*updateOrderDto.price;

    return this.oderRepository.save(order)
  }

  remove(id: number) {
    return this.oderRepository.delete(id);
  }
}