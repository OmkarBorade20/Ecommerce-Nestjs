import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAddressDto } from './create-address.dto';

export class UpdateAddressDto extends PartialType(CreateAddressDto) {

    @ApiProperty({default:1})
    id:number;
   
    @ApiProperty({default:"86/A Wanwadi SalunkheVihar Road Near Borade Nagar Pune 40"})
    address:string;

    @ApiProperty({default:"Pune"})
    city:string;

    @ApiProperty({default:"Maharashtra"})
    state:string;

    @ApiProperty({default:"India"})
    country:string;

    @ApiProperty({default:"411040"})
    pincode:number;

}
