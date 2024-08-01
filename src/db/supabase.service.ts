import { Inject, Injectable, Logger, Scope } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
@Injectable()
export class Supabase {
  private clientInstance: SupabaseClient;
  private readonly logger = new Logger(Supabase.name);
  constructor(private configService: ConfigService) {}

  getClient() {
    this.logger.log('getting supabase client...');
    if (this.clientInstance) {
      this.logger.log('client exists - returning for current Scope.REQUEST');
      return this.clientInstance;
    }

    this.logger.log('initialising new supabase client for new Scope.REQUEST');

    this.clientInstance = createClient(
      this.configService.get('supabase_url'),
      this.configService.get('api_key'),
    );

    return this.clientInstance;
  }
}
