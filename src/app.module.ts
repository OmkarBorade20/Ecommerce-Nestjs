import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserModule } from './modules/users/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { TokenValidation } from './middlewares/tokenvalidation.middleware';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.local.env'
      //['.local.env','.prod.env']
    
      
    }),
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      "password": "mysqlroot",
      "database": "test",
      "entities": [__dirname+'/**/*.entity{.ts,.js}'],
      "synchronize":true,
      "logging":true
    }),
    UserModule,AuthModule, ProductsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TokenValidation).forRoutes('users','products')
  }
 
}
