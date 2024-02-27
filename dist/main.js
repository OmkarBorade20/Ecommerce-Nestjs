"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const helmet_1 = require("helmet");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.use((0, helmet_1.default)());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Ecommerce Backend APIS')
        .setDescription('Ecommerce App API Descriptions.')
        .setVersion('1.0')
        .addBearerAuth({
        "type": "http",
        "scheme": "bearer",
        "bearerFormat": "JWT",
        "name": "JWT",
        "description": "Enter JWT Token.",
        "in": "headers"
    }, "JWT-auth").build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('/api-docs', app, document);
    await app.listen(process.env.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map