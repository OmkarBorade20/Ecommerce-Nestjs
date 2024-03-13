import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginUser {
  @ApiProperty({ default: 'omkar.borade@gmail.com' })
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @ApiProperty({ default: 'Omkar123' })
  password: string;
}
