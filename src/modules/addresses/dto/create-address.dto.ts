import { ApiProperty } from '@nestjs/swagger';

export class CreateAddressDto {
  @ApiProperty({ default: 1 })
  userid: number;

  @ApiProperty({
    default: '86/A Wanwadi SalunkheVihar Road Near Borade Nagar Pune 40',
  })
  address: string;

  @ApiProperty({ default: 'Pune' })
  city: string;

  @ApiProperty({ default: 'Maharashtra' })
  state: string;

  @ApiProperty({ default: 'India' })
  country: string;

  @ApiProperty({ default: '411040' })
  pincode: number;
}
