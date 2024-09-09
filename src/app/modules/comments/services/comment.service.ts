import { Injectable } from '@nestjs/common';
import { Supabase } from 'src/db/supabase.service';

@Injectable()
export class CommentsService {
  constructor(private readonly supabase: Supabase) {}
  private readonly cats = [];

  async getPostComments(post_id: number) {
    const comments = await this.supabase
      .getClient()
      .from('comments')
      .select(
        `  
      body,
      created_at,
      users ( id, username, profile_pic_url )
    `,
      )
      .eq('post_id', post_id)
      .order('id', { ascending: false });

    return comments;
  }

  async createComment(body: string, poster_id: number, post_id: number) {
    await this.supabase
      .getClient()
      .from('comments')
      .insert([{ body, poster_id, post_id }]);

    return await this.supabase
      .getClient()
      .from('comments')
      .select(
        `  
      body,
      created_at,
      users ( id, username, profile_pic_url )
      `,
      )
      .eq('post_id', post_id)
      .order('id', { ascending: false });
  }
}
