import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { logging } from './interceptors/logging.intercepotr';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {



  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(helmet());
  app.useGlobalInterceptors(new logging())
  app.useGlobalPipes(new ValidationPipe())
  const config = new DocumentBuilder()
    .setTitle('Ecommerce Backend APIS')
    .setDescription('Ecommerce App API Descriptions.')
    .setVersion('1.0')
    .addBearerAuth(
      {
        "type":"http",
        "scheme":"bearer",
        "bearerFormat":"JWT",
        "name":"JWT",
        "description":"Enter JWT Token.",
        "in":"headers"

      },"JWT-auth"
    ).build();

    const document=SwaggerModule.createDocument(app,config)
    SwaggerModule.setup('/api-docs',app,document)

  await app.listen(process.env.PORT);
}
bootstrap();
