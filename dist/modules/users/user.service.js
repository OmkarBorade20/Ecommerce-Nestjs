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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("typeorm");
const bcrypt_1 = require("bcrypt");
let UserService = class UserService {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async register(createuserDao) {
        const dbuser = await this.userRepo.findBy({ "email": createuserDao.email });
        if (dbuser.length != 0)
            throw new common_1.ConflictException(`${dbuser[0].email}: is Already Registered.!`);
        const address = {
            "address": createuserDao.address,
            "pincode": createuserDao.pincode,
            "city": createuserDao.city,
            "country": createuserDao.country,
            "state": createuserDao.state,
            "isActive": 1,
        };
        const addresses = [];
        addresses.push(address);
        let hasedPassword = await (0, bcrypt_1.hash)(createuserDao.password, 10);
        let user = new user_entity_1.User();
        user.name = createuserDao.name;
        user.age = createuserDao.age;
        user.gender = createuserDao.gender;
        user.city = createuserDao.city;
        user.phone = createuserDao.phone;
        user.email = createuserDao.email;
        user.password = hasedPassword;
        user.role = createuserDao.role;
        user.comments = [];
        user.addresses = addresses;
        return this.userRepo.save(user);
    }
    getAll() {
        return this.userRepo.find();
    }
    remove(id) {
        return this.userRepo.delete(id);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map