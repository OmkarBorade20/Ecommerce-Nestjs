import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';

@Controller('products')
@ApiTags("Products Apis.")
@ApiSecurity("JWT-auth")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post("/add")
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get("")
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch('/update/:id')
  update(@Param('id',ParseIntPipe)  id: number , @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete('/remove/:id')
  remove(@Param('id',ParseIntPipe) id: string) {
    return this.productsService.remove(+id);
  }

  // @Get("/:title")
  // findbyTitle(@Param("title") title:string):Promise<Product>{
  //   return this.productsService.findbyTitle(title);
  // }
}
