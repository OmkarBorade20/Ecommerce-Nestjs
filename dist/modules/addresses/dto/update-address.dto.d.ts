import { CreateAddressDto } from './create-address.dto';
declare const UpdateAddressDto_base: import("@nestjs/common").Type<Partial<CreateAddressDto>>;
export declare class UpdateAddressDto extends UpdateAddressDto_base {
    id: number;
    address: string;
    city: string;
    state: string;
    country: string;
    pincode: number;
}
export {};
