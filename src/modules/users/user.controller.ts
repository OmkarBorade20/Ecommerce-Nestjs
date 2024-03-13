import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDao } from './dto/createuserdao';
import { ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/decorators/roles.decorators';

@Controller('/users')
@ApiTags('Users Controllers.')
@ApiSecurity('JWT-auth')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/register')
  @ApiOperation({ summary: 'Api to Register a user into the system.' })
  register(@Body() createuserDao: CreateUserDao) {
    return this.userService.register(createuserDao);
  }

  @Get('/fetch')
  @Roles(['Admin'])
  @ApiOperation({ summary: 'Api to Fetch the Registered users.' })
  @UseInterceptors(ClassSerializerInterceptor)
  getAll() {
    return this.userService.getAll();
  }

  @Roles(['Admin'])
  @Get('/remove/:id')
  @ApiOperation({ summary: 'Api to Remove Registered users.' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userService.remove(id);
  }
}
