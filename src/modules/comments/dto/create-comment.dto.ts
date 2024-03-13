import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
  @ApiProperty({ default: 'Nice Product' })
  comment: string;

  @ApiProperty({ default: '2' })
  productid: number;
}
