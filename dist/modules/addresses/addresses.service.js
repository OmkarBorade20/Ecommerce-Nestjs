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
exports.AddressesService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const address_entity_1 = require("./entities/address.entity");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../users/entities/user.entity");
let AddressesService = class AddressesService {
    constructor(req, addressRepository, userRepository) {
        this.req = req;
        this.addressRepository = addressRepository;
        this.userRepository = userRepository;
    }
    async create(createAddressDto) {
        const user = await this.userRepository.findBy({
            email: this.req['user'].email,
        });
        if (user.length == 0)
            throw new common_1.NotFoundException('User is not Present in System.');
        let address = new address_entity_1.Address();
        address.address = createAddressDto.address;
        address.city = createAddressDto.city;
        address.country = createAddressDto.country;
        address.state = createAddressDto.state;
        address.isActive = 1;
        address.pincode = createAddressDto.pincode;
        address.user = user[0];
        return this.addressRepository.save(address);
    }
    findAll() {
        return this.addressRepository.find();
    }
    findOne(id) {
        return this.addressRepository.find({
            where: {
                id: id,
            },
        });
    }
    update(id, updateAddressDto) {
        return `This action updates a #${id} address`;
    }
    async remove(id) {
        let address = await this.addressRepository.findBy({ id: id });
        let user = await this.userRepository.find({
            where: {
                email: this.req['user'].email,
            },
            relations: {
                addresses: true,
            },
        });
        if (user[0].addresses.filter((e) => e.id == id).length == 0)
            throw new common_1.UnauthorizedException(`The Address Id ${id} is Not Avaialable for Edit.!`);
        address[0].isActive = 0;
        return this.addressRepository.save(address[0]);
    }
};
exports.AddressesService = AddressesService;
exports.AddressesService = AddressesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(core_1.REQUEST)),
    __param(1, (0, typeorm_1.InjectRepository)(address_entity_1.Address)),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [Object, typeorm_2.Repository,
        typeorm_2.Repository])
], AddressesService);
//# sourceMappingURL=addresses.service.js.map