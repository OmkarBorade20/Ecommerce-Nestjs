import {
  BadRequestException,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { verify } from 'jsonwebtoken';
import { NextFunction } from 'express';

@Injectable()
export class TokenValidation implements NestMiddleware {
 
  use(req: Request, res: Response, next: NextFunction) {
    let token: string = req?.headers['authorization']?.split(' ')[1];
    if (token == undefined)
      throw new BadRequestException('Kindly Pass the Token in Headers.');

    let data = verify(token, process.env.JWT_TOKEN);

    req['user'] = data.data;
    next();
  }
}
