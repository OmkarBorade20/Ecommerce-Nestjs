import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDao } from "./dto/createuserdao";
import { ApiSecurity, ApiTags } from "@nestjs/swagger";

@Controller("/users")
@ApiTags("Users Apis.")
@ApiSecurity("JWT-auth")
export class UserController {

    
    constructor(private readonly userService: UserService){}

    @Post("/register")
    register(@Body() createuserDao:CreateUserDao){
        return this.userService.register(createuserDao);
    }

    @Get("/fetch")
    getAll(){
        return this.userService.getAll();
    }

    @Get("/remove/:id")
    remove(@Param("id",ParseIntPipe) id:number){
        return this.userService.remove(id);
    }

}