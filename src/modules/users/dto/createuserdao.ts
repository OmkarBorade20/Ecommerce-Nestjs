import { ApiProperty } from "@nestjs/swagger";
import { Address } from "src/modules/addresses/entities/address.entity";



export class CreateUserDao extends Address{
    @ApiProperty({default:"Omkar Borade"})
    name:string;

    @ApiProperty({default:"25"})
    age:number;

    @ApiProperty({default:"Male"})
    gender:string;

    @ApiProperty({default:"Pune"})
    city:string;

    @ApiProperty({default:"8446920098"})
    phone:string;

    @ApiProperty({default:"omkar.borade@gmail.com"})
    email:string;

    @ApiProperty({default:"Omkar123"})
    password:string;
    
    @ApiProperty({default:"Admin"})
    role:string;

    //address 
    @ApiProperty({default:"86/A Wanwadi SalunkheVihar Road Near Borade Nagar Pune 40"})
    address:string;

    @ApiProperty({default:"Maharashtra"})
    state:string;

    @ApiProperty({default:"India"})
    country:string;

    @ApiProperty({default:"411040"})
    pincode:number;



}