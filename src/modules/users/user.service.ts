import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";

import {compare , hash}from "bcrypt"

@Injectable()
export class UserService{

    constructor(@InjectRepository(User) private readonly userRepo: Repository<User> ){

    }

    async register(createuserDao):Promise<User>{

        let hasedPassword=await hash(createuserDao.password,10)
        let user=new User();
        user.name=createuserDao.name;
        user.age=createuserDao.age;
        user.gender=createuserDao.gender;
        user.city=createuserDao.city;
        user.phone=createuserDao.phone;
        user.email=createuserDao.email;
        user.password=hasedPassword;
        user.role=createuserDao.role;

        return this.userRepo.save(user);
    }

    getAll():Promise<User[]>{
        return this.userRepo.find();
    }

     remove(id){
        return this.userRepo.delete(id);
  
    }

    
}