import { CreateOrderDto } from './create-order.dto';
declare const UpdateOrderDto_base: import("@nestjs/common").Type<Partial<CreateOrderDto>>;
export declare class UpdateOrderDto extends UpdateOrderDto_base {
    qty: number;
    price: number;
    total: number;
}
export {};
