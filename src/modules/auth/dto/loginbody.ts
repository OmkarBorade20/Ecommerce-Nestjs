import { ApiProperty } from "@nestjs/swagger";

export class LoginUser{
    @ApiProperty({default: "omkar.borade@gmail.com"})
    email:string;
    
    @ApiProperty({default: "omkar123"})
    password:string;
}