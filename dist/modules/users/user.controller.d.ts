import { UserService } from './user.service';
import { CreateUserDao } from './dto/createuserdao';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    register(createuserDao: CreateUserDao): Promise<import("./entities/user.entity").User>;
    getAll(): Promise<import("./entities/user.entity").User[]>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
