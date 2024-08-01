import { Injectable } from '@nestjs/common';
import { Supabase } from 'src/db/supabase.service';

@Injectable()
export class PostsService {
  constructor(private readonly supabase: Supabase) {}
  private readonly cats = [];

  async getAllPosts() {
    const posts = await this.supabase
      .getClient()
      .from('posts')
      .select(
        `
      id, 
      title, 
      body,
      created_at,
      users ( id, username, profile_pic_url )
    `,
      )
      .order('id', { ascending: false });

    return posts;
  }

  async getPostById(post_id: number) {
    const post = await this.supabase
      .getClient()
      .from('posts')
      .select(
        `
      id, 
      title, 
      body,
      created_at,
      users ( id, username, profile_pic_url )
    `,
      )
      .eq('id', post_id)
      .order('id', { ascending: false });

    return post;
  }

  async createPost(body: string, title: string, user_id: number) {
    await this.supabase
      .getClient()
      .from('posts')
      .insert([{ body, title, user_id }]);

    return await this.supabase
      .getClient()
      .from('posts')
      .select(
        `
    id, 
    title, 
    body,
    created_at,
    users ( id, username, profile_pic_url )
  `,
      )
      .order('id', { ascending: false });
  }
}
