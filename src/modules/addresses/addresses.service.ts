import { Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from './entities/address.entity';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AddressesService {

  constructor(@Inject(REQUEST) private readonly req:Request,@InjectRepository(Address) private readonly addressRepository:Repository<Address>,@InjectRepository(User) private readonly userRepository:Repository<User>){

  }
  async create(createAddressDto: CreateAddressDto) {

    //find user details from email

    const user=await this.userRepository.findBy({"email":this.req["user"].email})

    if(user.length==0)
      throw new NotFoundException("User is not Present in System.")

    let address:Address=new Address();
    address.address=createAddressDto.address;
    address.city=createAddressDto.city;
    address.country=createAddressDto.country;
    address.state=createAddressDto.state;
    address.isActive=1;
    address.pincode=createAddressDto.pincode;
    address.user=user[0];
  
    return this.addressRepository.save(address);
  }

  findAll() {
    return this.addressRepository.find();
  }

  findOne(id: number) {
    return this.addressRepository.find({
      where:{
        "id":id
    }});
  }

  update(id: number, updateAddressDto: UpdateAddressDto) {
    return `This action updates a #${id} address`;
  }

 async remove(id: number) {
    //find address based on id  
    let address:Address[]=await this.addressRepository.findBy({"id":id})


    let user:User[]=await this.userRepository.find({
      where:{
        "email":this.req["user"].email
      },relations:{
      addresses:true
    }})

    if(user[0].addresses.filter(e=>e.id==id).length==0)
      throw new UnauthorizedException(`The Address Id ${id} is Not Avaialable for Edit.!`)

    address[0].isActive=0;
    return this.addressRepository.save(address[0]);
  }
}
