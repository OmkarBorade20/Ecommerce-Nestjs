import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Address } from './entities/address.entity';

@ApiTags('Address Controller.')
@ApiSecurity('JWT-auth')
@Controller('addresses')
export class AddressesController {
  constructor(private readonly addressesService: AddressesService) {}

  @ApiOperation({ summary: 'Api to Add Address to User.' })
  @Post('/add')
  create(@Body() createAddressDto: CreateAddressDto):Promise<Address> {
    return this.addressesService.create(createAddressDto);
  }

  @ApiOperation({
    summary: 'Api to Fetch all Address {Admin Access Required}.',
  })
  @Get()
  findAll():Promise<Address[]> {
    return this.addressesService.findAll();
  }

  @ApiOperation({ summary: 'Api to find Address based on Id.' })
  @Get(':id')
  findOne(@Param('id') id: string) :Promise<Address[]>{
    return this.addressesService.findOne(+id);
  }

  @ApiOperation({ summary: 'Api to update Address based on Id.' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAddressDto: UpdateAddressDto) :string{
    return this.addressesService.update(+id, updateAddressDto);
  }

  @ApiOperation({ summary: 'Api to Remove Address based on User logged in.' })
  @Delete(':id')
  remove(@Param('id') id: string):Promise<Address> {
    return this.addressesService.remove(+id);
  }
}
