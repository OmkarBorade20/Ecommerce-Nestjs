import { ConflictException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";

import { hash}from "bcrypt"
import { Address } from "../addresses/entities/address.entity";


@Injectable()
export class UserService{

    constructor(@InjectRepository(User) private readonly userRepo: Repository<User> ){

    }

    async register(createuserDao):Promise<User>{


        //fetch and see if user is already Registerd or not.
        const dbuser=await this.userRepo.findBy({"email":createuserDao.email})

        if(dbuser.length!=0)
            throw new ConflictException(`${dbuser[0].email }: is Already Registered.!`)
       
        const address:Address={
            "address":createuserDao.address,
            "pincode":createuserDao.pincode,
            "city":createuserDao.city,
            "country":createuserDao.country,
            "state":createuserDao.state,
            "isActive":1,

        }
         
        const addresses :Address[]=[];
        addresses.push(address);

        let hasedPassword:string=await hash(createuserDao.password,10)
        let user=new User();
        user.name=createuserDao.name;
        user.age=createuserDao.age;
        user.gender=createuserDao.gender;
        user.city=createuserDao.city;
        user.phone=createuserDao.phone;
        user.email=createuserDao.email;
        user.password=hasedPassword;
        user.role=createuserDao.role;
        user.comments=[];
        user.addresses=addresses;

        return this.userRepo.save(user);
    }

    getAll():Promise<User[]>{
        return this.userRepo.find();
    }

     remove(id){
        return this.userRepo.delete(id);
  
    }

  

    
}