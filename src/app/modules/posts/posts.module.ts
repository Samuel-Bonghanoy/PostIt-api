import { Module } from '@nestjs/common';
import { PostsController } from './controllers/post.controller';
import { PostsService } from './services/post.service';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
