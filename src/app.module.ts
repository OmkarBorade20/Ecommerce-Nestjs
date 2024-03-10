import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserModule } from './modules/users/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { TokenValidation } from './middlewares/tokenvalidation.middleware';
import { ProductsModule } from './modules/products/products.module';
import {  CacheModule } from '@nestjs/cache-manager';
import { ScheduleModule } from '@nestjs/schedule';
import { OrdersModule } from './modules/orders/orders.module';
import { CommentsModule } from './modules/comments/comments.module';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { ExceptionHandler } from './Filters/exceptionHandler.filter';
import { TypeORMQueryExceptionFilter } from './Filters/typeORMQueryException.filter';
import { AddressesModule } from './modules/addresses/addresses.module';
import { InternalServerErrorExceptionFilter } from './Filters/InternalServerError.filter';
import { AllExceptionsFilter } from './Filters/globalExceptionHandler.filter';
import { AuthenticationGuard } from './guards/role.guard';


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
       //"logging":true

    }),
    CacheModule.register({
      ttl: 10000,
      isGlobal:true

    }),
    ScheduleModule.forRoot(),
    AuthModule,UserModule,AddressesModule, ProductsModule, OrdersModule, CommentsModule,
  ],
  controllers: [],
  providers: [
    {
      provide:APP_FILTER,
      useClass:TypeORMQueryExceptionFilter
    },
    {
    provide:APP_FILTER,
    useClass:ExceptionHandler
  },
  // {
  //   provide:APP_FILTER,
  //   useClass:InternalServerErrorExceptionFilter
  // }
  // {
  //   provide:APP_FILTER,
  //   useClass:AllExceptionsFilter
  // }
  {
    provide:APP_GUARD,
    useClass:AuthenticationGuard
  }

 
]



})
export class AppModule implements NestModule {
  
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TokenValidation).forRoutes('addresses','products','orders','comments')
  }
 
}
