"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const user_module_1 = require("./modules/users/user.module");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("./modules/auth/auth.module");
const tokenvalidation_middleware_1 = require("./middlewares/tokenvalidation.middleware");
const products_module_1 = require("./modules/products/products.module");
const cache_manager_1 = require("@nestjs/cache-manager");
const schedule_1 = require("@nestjs/schedule");
const orders_module_1 = require("./modules/orders/orders.module");
const comments_module_1 = require("./modules/comments/comments.module");
const core_1 = require("@nestjs/core");
const exceptionHandler_filter_1 = require("./Filters/exceptionHandler.filter");
const typeORMQueryException_filter_1 = require("./Filters/typeORMQueryException.filter");
const addresses_module_1 = require("./modules/addresses/addresses.module");
const role_guard_1 = require("./guards/role.guard");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(tokenvalidation_middleware_1.TokenValidation)
            .forRoutes('addresses', 'products', 'orders', 'comments');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.local.env',
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'mysqlroot',
                database: 'test',
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: true,
            }),
            cache_manager_1.CacheModule.register({
                ttl: 10000,
                isGlobal: true,
            }),
            schedule_1.ScheduleModule.forRoot(),
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            addresses_module_1.AddressesModule,
            products_module_1.ProductsModule,
            orders_module_1.OrdersModule,
            comments_module_1.CommentsModule
        ],
        controllers: [],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: role_guard_1.RoleAuthenticationGuard,
            },
            {
                provide: core_1.APP_FILTER,
                useClass: typeORMQueryException_filter_1.TypeORMQueryExceptionFilter,
            },
            {
                provide: core_1.APP_FILTER,
                useClass: exceptionHandler_filter_1.ExceptionHandler,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map