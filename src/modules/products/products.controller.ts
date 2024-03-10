import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseInterceptors, UsePipes, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { Freeze } from 'src/pipes/freeze.pipe';
import { Roles } from 'src/decorators/roles.decorators';


@ApiTags("Products Controllers.")
@ApiSecurity("JWT-auth")
@Controller('/products')
@UseInterceptors(CacheInterceptor)
export class ProductsController {
  count=0;
  constructor(private readonly productsService: ProductsService) {}

  @Roles(['admin'])
  @Post("/add")
  @ApiOperation({ summary: 'Api to Add Products.' })
  // @UseGuards( Freeze)  //this will freeze all body params or queries present.
  // create(@Body(new Freeze()) createProductDto: any) {

    create(@Body() createProductDto: CreateProductDto) {
    //createProductDto.data="abc";
    return this.productsService.create(createProductDto);
  }


  @Get("")
  @ApiOperation({ summary: 'Api to Fetch Products.' })
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Api to Fetch Products based on ProductId passed.' })
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch('/update/:id')
  @ApiOperation({ summary: 'Api to Update Products Based on ProductID.' })
  update(@Param('id',ParseIntPipe)  id: number , @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete('/remove/:id')
  @ApiOperation({ summary: 'Api to Remove Products based on ProductID.' })
  remove(@Param('id',ParseIntPipe) id: string) {
    return this.productsService.remove(+id);
  }

  // @Get("/:title")
  // findbyTitle(@Param("title") title:string):Promise<Product>{
  //   return this.productsService.findbyTitle(title);
  // }
}
