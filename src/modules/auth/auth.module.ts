import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../users/entities/user.entity";
import { AuthService } from "./auth.service";
import { TokenValidation } from "src/middlewares/tokenvalidation.middleware";

@Module({
    imports:[TypeOrmModule.forFeature([User])],
    controllers:[AuthController],
    providers:[AuthService]

})
export class AuthModule implements NestModule {

    configure(consumer: MiddlewareConsumer) {
        consumer.apply().exclude()
    }
}