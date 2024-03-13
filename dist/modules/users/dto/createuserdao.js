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
exports.CreateUserDao = void 0;
const swagger_1 = require("@nestjs/swagger");
const address_entity_1 = require("../../addresses/entities/address.entity");
class CreateUserDao extends address_entity_1.Address {
}
exports.CreateUserDao = CreateUserDao;
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Omkar Borade' }),
    __metadata("design:type", String)
], CreateUserDao.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '25' }),
    __metadata("design:type", Number)
], CreateUserDao.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Male' }),
    __metadata("design:type", String)
], CreateUserDao.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Pune' }),
    __metadata("design:type", String)
], CreateUserDao.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '8446920098' }),
    __metadata("design:type", String)
], CreateUserDao.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'omkar.borade@gmail.com' }),
    __metadata("design:type", String)
], CreateUserDao.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Omkar123' }),
    __metadata("design:type", String)
], CreateUserDao.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Admin' }),
    __metadata("design:type", String)
], CreateUserDao.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        default: '86/A Wanwadi SalunkheVihar Road Near Borade Nagar Pune 40',
    }),
    __metadata("design:type", String)
], CreateUserDao.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'Maharashtra' }),
    __metadata("design:type", String)
], CreateUserDao.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'India' }),
    __metadata("design:type", String)
], CreateUserDao.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '411040' }),
    __metadata("design:type", Number)
], CreateUserDao.prototype, "pincode", void 0);
//# sourceMappingURL=createuserdao.js.map