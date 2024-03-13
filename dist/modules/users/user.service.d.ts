import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    private readonly userRepo;
    constructor(userRepo: Repository<User>);
    register(createuserDao: any): Promise<User>;
    getAll(): Promise<User[]>;
    remove(id: any): Promise<import("typeorm").DeleteResult>;
}
