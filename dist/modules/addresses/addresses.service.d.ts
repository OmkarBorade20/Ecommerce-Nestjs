import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Request } from 'express';
import { Address } from './entities/address.entity';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
export declare class AddressesService {
    private readonly req;
    private readonly addressRepository;
    private readonly userRepository;
    constructor(req: Request, addressRepository: Repository<Address>, userRepository: Repository<User>);
    create(createAddressDto: CreateAddressDto): Promise<Address>;
    findAll(): Promise<Address[]>;
    findOne(id: number): Promise<Address[]>;
    update(id: number, updateAddressDto: UpdateAddressDto): string;
    remove(id: number): Promise<Address>;
}
