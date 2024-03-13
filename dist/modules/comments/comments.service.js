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
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const comment_entity_1 = require("./entities/comment.entity");
const product_entity_1 = require("../products/entities/product.entity");
const user_entity_1 = require("../users/entities/user.entity");
const core_1 = require("@nestjs/core");
let CommentsService = class CommentsService {
    constructor(req, commentRepository, productRepository, userRepository) {
        this.req = req;
        this.commentRepository = commentRepository;
        this.productRepository = productRepository;
        this.userRepository = userRepository;
    }
    async create(createCommentDto) {
        const product = await this.productRepository.findBy({
            id: createCommentDto.productid,
        });
        if (product.length == 0)
            throw new common_1.NotFoundException(`ProductID :${createCommentDto.productid} is Not Found in System!.`);
        const comment = new comment_entity_1.Comment();
        comment.comment = createCommentDto.comment;
        comment.product = product[0];
        comment.username = this.req['user'].name;
        comment.user = this.req['user'];
        return this.commentRepository.save(comment);
    }
    findAll() {
        return this.commentRepository.find();
    }
    findComments(req) {
        let username = req['user'].name;
        return this.commentRepository.find({
            relations: ['product'],
            where: {
                username: username,
            },
        });
    }
    findOne(id) {
        return this.commentRepository.findBy({ id: id });
    }
    update(id, updateCommentDto) {
        return `This action updates a #${id} comment`;
    }
    remove(id) {
        return `This action removes a #${id} comment`;
    }
};
exports.CommentsService = CommentsService;
exports.CommentsService = CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(core_1.REQUEST)),
    __param(1, (0, typeorm_2.InjectRepository)(comment_entity_1.Comment)),
    __param(2, (0, typeorm_2.InjectRepository)(product_entity_1.Product)),
    __param(3, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [Object, typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], CommentsService);
//# sourceMappingURL=comments.service.js.map