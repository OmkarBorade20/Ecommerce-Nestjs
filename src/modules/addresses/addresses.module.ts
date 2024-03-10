import { Module } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { AddressesController } from './addresses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Address } from './entities/address.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User,Address])],
  controllers: [AddressesController],
  providers: [AddressesService],
})
export class AddressesModule {}

