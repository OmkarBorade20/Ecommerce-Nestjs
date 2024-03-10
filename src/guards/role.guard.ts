import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Roles } from "src/decorators/roles.decorators";

@Injectable()
export class RoleAuthenticationGuard implements CanActivate{

    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean{
        const ctx=context.switchToHttp()
        let request=ctx.getRequest()
       

        const roles = this.reflector.get(Roles, context.getHandler());
        if (!roles) {
          return true;
        }
        const user=request.user;
        console.log("user",user)

        if(user.role==roles)
            return true;
        else 
            return false;
       
    }

}