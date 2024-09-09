import { Module } from '@nestjs/common';
import { CommentsController } from './controllers/comment.controller';
import { CommentsService } from './services/comment.service';
import { Supabase } from 'src/db/supabase.service';

@Module({
  controllers: [CommentsController],
  providers: [CommentsService, Supabase],
})
export class CommentsModule {}
