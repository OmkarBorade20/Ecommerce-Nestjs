import { Body, Controller, Get, Headers, HttpCode, Post } from "@nestjs/common";
import { LoginUser } from "./dto/loginbody";
import { AuthService } from "./auth.service";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@Controller("/auth")
@ApiTags("Authentication Controllers.")
export class AuthController{

    
    constructor(private readonly authService:AuthService){}

   
    @Post("/login")
    @HttpCode(200)
    @ApiOperation({ summary: 'Api to Login into the system.' })
    login(@Body() body:LoginUser){
        return this.authService.login(body);
    }

    @Get('/refresh')
    @ApiOperation({ summary: 'Api to Genrate new Token upon passing Refresh Tokens.' })
    refresh(@Headers('refresh-token') refreshToken:string){
        return this.authService.refreshToken(refreshToken);
    }
}