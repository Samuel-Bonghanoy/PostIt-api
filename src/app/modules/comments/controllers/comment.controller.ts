import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CommentsService } from '../services/comment.service';
import { CommentDto } from '../DTO/comment';

@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Post()
  create(@Body() comment: CommentDto) {
    const { body, post_id, poster_id } = comment;

    return this.commentsService.createComment(body, post_id, poster_id);
  }

  @Get()
  async findCommentsOfPost(@Body() id: number) {
    return this.commentsService.getPostComments(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentsService.getPostComments(parseInt(id));
  }
}
