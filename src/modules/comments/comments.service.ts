import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { Product } from '../products/entities/product.entity';
import { User } from '../users/entities/user.entity';
import { REQUEST } from '@nestjs/core';
import {Request} from "express"


@Injectable()
export class CommentsService {
  constructor(@Inject(REQUEST) private readonly req: Request,@InjectRepository(Comment) private readonly commentRepository:Repository<Comment>,@InjectRepository(Product) private readonly productRepository:Repository<Product>,@InjectRepository(User) private readonly userRepository:Repository<User>){}
  
  async create(createCommentDto: CreateCommentDto) {

    const product=await this.productRepository.findBy({"id":createCommentDto.productid})
   
    if(product.length==0)
      throw new NotFoundException(`ProductID :${createCommentDto.productid } is Not Found in System!.`)
    
    const comment=new Comment();
    comment.comment=createCommentDto.comment;
    comment.product=product[0];
    comment.username=this.req["user"].name;
    comment.user=this.req["user"];
    
    return this.commentRepository.save(comment)
  }

  findAll() {
    return this.commentRepository.find();
  }
  
  findComments(req:Request)
    {
      let username:string=req["user"].name;
      return this.commentRepository.find({
         relations: ['product'],
            where: {
                'username': username,
            },
      })
    }
  

  findOne(id: number) {
    return this.commentRepository.findBy({"id":id});
  }


  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
