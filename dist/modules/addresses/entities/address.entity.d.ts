import { User } from 'src/modules/users/entities/user.entity';
export declare class Address {
    id?: number;
    address: string;
    city: string;
    state: string;
    country: string;
    pincode: number;
    created_on?: Date;
    update_on?: Date;
    isActive?: number;
    user?: User;
}
