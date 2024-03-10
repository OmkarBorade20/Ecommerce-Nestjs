import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateOrderDto } from './create-order.dto';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {

    // @ApiProperty({default: "2"})
    // userID: number;

    // @ApiProperty({default: "2"})
    // productId: number;

    @ApiProperty({default: "2"})
    qty: number;

    @ApiProperty({default: "2"})
    price: number;

    @ApiProperty({default: "2"})
    total: number;
}

