"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenValidation = void 0;
const common_1 = require("@nestjs/common");
const jsonwebtoken_1 = require("jsonwebtoken");
let TokenValidation = class TokenValidation {
    use(req, res, next) {
        let token = req?.headers['authorization']?.split(' ')[1];
        if (token == undefined)
            throw new common_1.BadRequestException("Kindly Pass the Token in Headers.");
        let data = (0, jsonwebtoken_1.verify)(token, process.env.JWT_TOKEN);
        req['user'] = data.data;
        next();
    }
};
exports.TokenValidation = TokenValidation;
exports.TokenValidation = TokenValidation = __decorate([
    (0, common_1.Injectable)()
], TokenValidation);
//# sourceMappingURL=tokenvalidation.middleware.js.map