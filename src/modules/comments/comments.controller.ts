import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';

@ApiTags("Comments Controller.")
@ApiSecurity("JWT-auth")
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post("/add")
  @ApiOperation({ summary: 'Api to Add Comments to Products .' })
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.create(createCommentDto);
  }


  @Get()
  @ApiOperation({ summary: 'Api to Fetch all Comments.' })
  findAll() {
    return this.commentsService.findAll();
  }


  @Get("/fetch")
  @ApiOperation({ summary: 'Api to Fetch all Comments based on login role.' })
  findComments(@Req() req:Request) {
    return this.commentsService.findComments(req);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Api to Fetch Comments based on ID.' })
  findOne(@Param('id') id: string) {
    return this.commentsService.findOne(+id);
  }

  @Patch('/update/:id')
  @ApiOperation({ summary: 'Api to Update Comments .' })
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentsService.update(+id, updateCommentDto);
  }

  @Delete('/remove/:id')
  @ApiOperation({ summary: 'Api to Delete Comments .' })
  remove(@Param('id') id: string) {
    return this.commentsService.remove(+id);
  }
}
