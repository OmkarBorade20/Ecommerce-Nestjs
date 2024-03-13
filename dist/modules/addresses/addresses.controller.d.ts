import { AddressesService } from './addresses.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address } from './entities/address.entity';
export declare class AddressesController {
    private readonly addressesService;
    constructor(addressesService: AddressesService);
    create(createAddressDto: CreateAddressDto): Promise<Address>;
    findAll(): Promise<Address[]>;
    findOne(id: string): Promise<Address[]>;
    update(id: string, updateAddressDto: UpdateAddressDto): string;
    remove(id: string): Promise<Address>;
}
