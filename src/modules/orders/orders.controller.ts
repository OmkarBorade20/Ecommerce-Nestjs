import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import {  ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';

@ApiTags("Orders Api.")
@ApiSecurity("JWT-auth")
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

 
  @Post("create")
   @ApiOperation({ summary: 'Creates Orders.' })
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  @ApiOperation({ summary: 'Fetches all the Orders.' })
  findAll() {
    return this.ordersService.findAll();
  }

   @Get(':id')
   @ApiOperation({ summary: 'Fetches all the Orders using OrderId.' })
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }

   @Patch('/update/:id')
   @ApiOperation({ summary: 'Updates Order based on Id.' })
  update(@Param('id') id: number, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(+id, updateOrderDto);
  }

   @Delete('/remove/:id')
   @ApiOperation({ summary: 'Removes Orders based on OrderId passed.' })
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }
}
