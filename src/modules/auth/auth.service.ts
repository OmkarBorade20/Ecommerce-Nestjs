import { Injectable, UnauthorizedException } from "@nestjs/common";
import { LoginUser } from "./dto/loginbody";

import {sign,verify} from "jsonwebtoken"
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../users/entities/user.entity";
import { Repository } from "typeorm";


@Injectable()
export class AuthService{

    constructor(@InjectRepository(User)private readonly userRepo:Repository<User> ){
    }

     generateTokens(data){
        return {
            "message":`Welcome ${data.email} !.`,
            "data":{
                "token":sign({"data":data},process.env.JWT_TOKEN, { expiresIn: '1H' }),
                "refresh_token":sign({"data":data},process.env.JWT_REFRESH_TOKEN, { expiresIn: '1M' })
            }
            
        }
    }

    validateUser(token:string,secret:string){
        try{
           let data=verify(token,secret)
           return data.data;
        }catch(e){
            throw new UnauthorizedException("Pass in a Valid Refresh Token.!")
        }
        
    }

    async login(userData:LoginUser){
        let user=await this.userRepo.findBy({"email":userData.email});
        console.log("user",user)

        return this.generateTokens(user[0]);
    }

    refreshToken(token){

        let data=this.validateUser(token,process.env.JWT_REFRESH_TOKEN)
        return this.generateTokens(data)
    }
}