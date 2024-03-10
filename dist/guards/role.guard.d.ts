import { CanActivate, ExecutionContext } from "@nestjs/common";
export declare class AuthenticationGuard implements CanActivate {
    private readonly reflector;
    constructor(reflector: any);
    canActivate(context: ExecutionContext): boolean;
}
