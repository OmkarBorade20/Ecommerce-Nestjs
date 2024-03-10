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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jsonwebtoken_1 = require("jsonwebtoken");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../users/entities/user.entity");
const typeorm_2 = require("typeorm");
const bcrypt_1 = require("bcrypt");
let AuthService = class AuthService {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    generateTokens(data) {
        return {
            message: `Welcome ${data.email} !.`,
            data: {
                token: (0, jsonwebtoken_1.sign)({ data: data }, process.env.JWT_TOKEN, { expiresIn: '1H' }),
                refresh_token: (0, jsonwebtoken_1.sign)({ data: data }, process.env.JWT_REFRESH_TOKEN, {
                    expiresIn: '1M',
                }),
            },
        };
    }
    validateUser(token, secret) {
        try {
            let data = (0, jsonwebtoken_1.verify)(token, secret);
            return data.data;
        }
        catch (e) {
            throw new common_1.UnauthorizedException('Pass in a Valid Refresh Token.!');
        }
    }
    async login(userData) {
        let user = await this.userRepo.findBy({ email: userData.email });
        console.log('user', user);
        if (user.length == 0)
            throw new common_1.NotFoundException('User is Not Present in System.');
        let check = await (0, bcrypt_1.compare)(userData.password, user[0].password);
        if (!check)
            throw new common_1.UnauthorizedException('Kindly Check Your Credentials.!');
        return this.generateTokens(user[0]);
    }
    refreshToken(token) {
        let data = this.validateUser(token, process.env.JWT_REFRESH_TOKEN);
        return this.generateTokens(data);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AuthService);
//# sourceMappingURL=auth.service.js.map