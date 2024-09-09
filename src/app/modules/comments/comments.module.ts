import { Module } from '@nestjs/common';
import { CommentsController } from './controllers/comment.controller';
import { CommentsService } from './services/comment.service';

@Module({
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
