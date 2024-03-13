import {  Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}
  //constructor(private readonly productRepo :ProductRepository){}

  create(createProductDto: CreateProductDto) {
    let product = new Product();
    product.title = createProductDto.title;
    product.description = createProductDto.description;
    product.imgurl = createProductDto.imgurl;
    product.price = createProductDto.price;
    product.comments = [];

    return this.productRepo.save(product);
  }

  findAll(): Promise<Product[]> {
    console.log('First');
    return this.productRepo.find({
      relations: {
        comments: true,
      },
    });
  }

  findOne(id: number): Promise<Product[]> {
    return this.productRepo.findBy({ id: id });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    let product = new Product();
    product.title = updateProductDto.title;
    product.description = updateProductDto.description;
    product.imgurl = updateProductDto.imgurl;
    product.price = updateProductDto.price;
    product.id = id;
    return this.productRepo.save(product);
  }

  remove(id: number) {
    return this.productRepo.delete(id);
  }

  // @Cron('10 * * * * *')
  // async CronSchedular(){
  //     //let data =await this.productRepo.find();
  //     console.log("Cron Running !.\n")
  // }

  // findbyTitle(title:string)
  // {
  //   return this.productRepo.getProductbyTitle(title);
  // }
}
