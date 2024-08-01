import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './posts/controllers/post.controller';
import { PostsService } from './posts/services/post.service';
import { Supabase } from 'src/db/supabase.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController, PostsController],
  providers: [AppService, PostsService, Supabase],
})
export class AppModule {}
