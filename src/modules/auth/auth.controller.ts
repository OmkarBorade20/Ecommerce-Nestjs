import { Body, Controller, Get, Headers, HttpCode, Post } from "@nestjs/common";
import { LoginUser } from "./dto/loginbody";
import { AuthService } from "./auth.service";
import { ApiTags } from "@nestjs/swagger";

@Controller("/auth")
@ApiTags("Authentication Apis.")
export class AuthController{

    
    constructor(private readonly authService:AuthService){}

   
    @Post("/login")
    @HttpCode(200)
    login(@Body() body:LoginUser){
        return this.authService.login(body);
    }

    @Get('/refresh')
    refresh(@Headers('refresh-token') refreshToken:string){
        return this.authService.refreshToken(refreshToken);
    }
}