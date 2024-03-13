"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logging = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let logging = class logging {
    intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        const userAgent = request.get('user-agent') || '';
        const { ip, method, path: url } = request;
        const now = Date.now();
        return next.handle().pipe((0, rxjs_1.tap)((res) => {
            const response = context.switchToHttp().getResponse();
            const { statusCode } = response;
            const contentLength = response.get('content-length');
            console.log(`${method} | ${statusCode}  |  ${url}  |  Controller: {${context.getClass().name}} | Method: {${context.getHandler().name}} | ${new Date().toISOString()} | ${Date.now() - now}ms `);
        }));
    }
};
exports.logging = logging;
exports.logging = logging = __decorate([
    (0, common_1.Injectable)()
], logging);
//# sourceMappingURL=logging.intercepotr.js.map