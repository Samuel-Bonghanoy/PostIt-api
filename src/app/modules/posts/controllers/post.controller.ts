import { Controller, Get, Post, Body, Param, All } from '@nestjs/common';

import { PostsService } from '../services/post.service';
import { PostDto } from '../DTO/post';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Post()
  create(@Body() post: PostDto) {
    const { body, title, user_id } = post;

    return this.postsService.createPost(body, title, user_id);
  }

  @Get()
  async findAll() {
    return this.postsService.getAllPosts();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.getPostById(parseInt(id));
  }

  @All()
  async handleInvalidRequests() {
    return 'This resource could not be found.';
  }
}
