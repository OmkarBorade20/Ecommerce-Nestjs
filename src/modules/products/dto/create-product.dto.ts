import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ default: 'Spiderman 2 PS 5' })
  title: string;

  @ApiProperty({ default: 4500 })
  price: number;

  @ApiProperty({ default: 'Sony Ps5 Spiderman 2 Standard Edn.' })
  description: string;

  @ApiProperty({
    default: 'https://m.media-amazon.com/images/I/81qBiCSoegL._SX679_.jpg',
  })
  imgurl: string;
}
