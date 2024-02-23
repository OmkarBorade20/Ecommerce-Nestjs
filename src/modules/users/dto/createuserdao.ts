import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDao{
    @ApiProperty()
    name:string;

    @ApiProperty()
    age:number;

    @ApiProperty()
    gender:string;

    @ApiProperty()
    city:string;

    @ApiProperty()
    phone:string;

    @ApiProperty()
    email:string;

    @ApiProperty()
    password:string;
    
    @ApiProperty()
    role:string;

}