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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const product_entity_1 = require("./entities/product.entity");
const typeorm_2 = require("typeorm");
const cache_manager_1 = require("@nestjs/cache-manager");
let ProductsService = class ProductsService {
    constructor(cacheManager, productRepo) {
        this.cacheManager = cacheManager;
        this.productRepo = productRepo;
    }
    create(createProductDto) {
        let product = new product_entity_1.Product();
        product.title = createProductDto.title;
        product.description = createProductDto.description;
        product.imgurl = createProductDto.imgurl;
        product.price = createProductDto.price;
        return this.productRepo.save(product);
    }
    findAll() {
        console.log("First");
        return this.productRepo.find();
    }
    findOne(id) {
        return this.productRepo.findBy({ "id": id });
    }
    update(id, updateProductDto) {
        let product = new product_entity_1.Product();
        product.title = updateProductDto.title;
        product.description = updateProductDto.description;
        product.imgurl = updateProductDto.imgurl;
        product.price = updateProductDto.price;
        product.id = id;
        return this.productRepo.save(product);
    }
    remove(id) {
        return this.productRepo.delete(id);
        ;
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __param(1, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [Object, typeorm_2.Repository])
], ProductsService);
//# sourceMappingURL=products.service.js.map