import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginUser } from './dto/loginbody';

import { sign, verify } from 'jsonwebtoken';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Repository } from 'typeorm';

import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  generateTokens(data) {
    return {
      message: `Welcome ${data.email} !.`,
      data: {
        token: sign({ data: data }, process.env.JWT_TOKEN, { expiresIn: '1H' }),
        refresh_token: sign({ data: data }, process.env.JWT_REFRESH_TOKEN, {
          expiresIn: '1M',
        }),
      },
    };
  }

  validateUser(token: string, secret: string) {
    try {
      let data = verify(token, secret);
      return data.data;
    } catch (e) {
      throw new UnauthorizedException('Pass in a Valid Refresh Token.!');
    }
  }

  async login(userData: LoginUser) {
    let user: User[] = await this.userRepo.findBy({ email: userData.email });
    console.log('user', user);

    //check for credentials
    if (user.length == 0)
      throw new NotFoundException('User is Not Present in System.');

    let check: boolean = await compare(userData.password, user[0].password);
    if (!check)
      throw new UnauthorizedException('Kindly Check Your Credentials.!');

    return this.generateTokens(user[0]);
  }

  refreshToken(token) {
    let data = this.validateUser(token, process.env.JWT_REFRESH_TOKEN);
    return this.generateTokens(data);
  }
}
