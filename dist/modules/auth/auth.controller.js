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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const loginbody_1 = require("./dto/loginbody");
const auth_service_1 = require("./auth.service");
const swagger_1 = require("@nestjs/swagger");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    login(body) {
        return this.authService.login(body);
    }
    refresh(refreshToken) {
        return this.authService.refreshToken(refreshToken);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('/login'),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Api to Login into the system.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loginbody_1.LoginUser]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('/refresh'),
    (0, swagger_1.ApiOperation)({
        summary: 'Api to Genrate new Token upon passing Refresh Tokens.',
    }),
    __param(0, (0, common_1.Headers)('refresh-token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "refresh", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('/auth'),
    (0, swagger_1.ApiTags)('Authentication Controllers.'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map