import { Module } from '@nestjs/common';
import { PostsController } from './controllers/post.controller';
import { PostsService } from './services/post.service';
import { Supabase } from 'src/db/supabase.service';

@Module({
  controllers: [PostsController],
  providers: [PostsService, Supabase],
})
export class PostsModule {}
