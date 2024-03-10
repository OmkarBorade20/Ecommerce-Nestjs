import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderDto {
  // @ApiProperty({default: "2"})
  // userID: number;


  @ApiProperty({default: "1"})
  productId: number;

  @ApiProperty({default: "1"})
  qty: number;

}
