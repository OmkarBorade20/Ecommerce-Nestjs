"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleAuthenticationGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const roles_decorators_1 = require("../decorators/roles.decorators");
let RoleAuthenticationGuard = class RoleAuthenticationGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        const ctx = context.switchToHttp();
        let request = ctx.getRequest();
        const roles = this.reflector.get(roles_decorators_1.Roles, context.getHandler());
        if (!roles) {
            return true;
        }
        const user = request.user;
        console.log('user', user);
        if (roles.includes(user.role))
            return true;
        else
            return false;
    }
};
exports.RoleAuthenticationGuard = RoleAuthenticationGuard;
exports.RoleAuthenticationGuard = RoleAuthenticationGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], RoleAuthenticationGuard);
//# sourceMappingURL=role.guard.js.map