import { ApiProperty } from '@nestjs/swagger';

export class UpdateOrderDto {
  // @ApiProperty({default: "2"})
  // userID: number;

  // @ApiProperty({default: "2"})
  // productId: number;

  @ApiProperty({ default: '2' })
  qty: number;
}
