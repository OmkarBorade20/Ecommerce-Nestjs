import { LoginUser } from "./dto/loginbody";
import { User } from "../users/entities/user.entity";
import { Repository } from "typeorm";
export declare class AuthService {
    private readonly userRepo;
    constructor(userRepo: Repository<User>);
    generateTokens(data: any): {
        message: string;
        data: {
            token: any;
            refresh_token: any;
        };
    };
    validateUser(token: string, secret: string): any;
    login(userData: LoginUser): Promise<{
        message: string;
        data: {
            token: any;
            refresh_token: any;
        };
    }>;
    refreshToken(token: any): {
        message: string;
        data: {
            token: any;
            refresh_token: any;
        };
    };
}
