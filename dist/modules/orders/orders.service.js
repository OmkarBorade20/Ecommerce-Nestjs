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
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const order_entity_1 = require("./entities/order.entity");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("../products/entities/product.entity");
const core_1 = require("@nestjs/core");
let OrdersService = class OrdersService {
    constructor(req, oderRepository, productRepository) {
        this.req = req;
        this.oderRepository = oderRepository;
        this.productRepository = productRepository;
    }
    async create(createOrderDto) {
        let product = await this.productRepository.findBy({
            id: createOrderDto.productId,
        });
        if (product.length == 0)
            throw new common_1.NotFoundException(`Product Not Found For ID:${createOrderDto.productId}`);
        let order = new order_entity_1.Order();
        order.user = this.req['user'];
        order.product = product[0];
        order.qty = createOrderDto.qty;
        order.price = product[0].price;
        order.total = createOrderDto.qty * product[0].price;
        return this.oderRepository.save(order);
    }
    findAll() {
        return this.oderRepository.find();
    }
    findOne(id) {
        return this.oderRepository.findBy({ orderID: id });
    }
    async update(id, updateOrderDto) {
        let order = new order_entity_1.Order();
        order.orderID = id;
        let order_old = await this.oderRepository.find({
            where: { orderID: id },
            relations: {
                user: true,
                product: true,
            },
        });
        if (order_old.length == 0)
            throw new common_1.NotFoundException(`Order Id:${id} is Not Valid.`);
        order.qty = updateOrderDto.qty;
        order.price = order_old[0].product.price;
        order.total = updateOrderDto.qty * order_old[0].product.price;
        return this.oderRepository.save(order);
    }
    remove(id) {
        return this.oderRepository.delete(id);
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(core_1.REQUEST)),
    __param(1, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __param(2, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [Object, typeorm_2.Repository,
        typeorm_2.Repository])
], OrdersService);
//# sourceMappingURL=orders.service.js.map