import { LoginUser } from './dto/loginbody';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: LoginUser): Promise<{
        message: string;
        data: {
            token: any;
            refresh_token: any;
        };
    }>;
    refresh(refreshToken: string): {
        message: string;
        data: {
            token: any;
            refresh_token: any;
        };
    };
}
