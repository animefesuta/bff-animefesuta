import { Module } from '@nestjs/common';
import { LivestreamModule } from './livestream/livestream.module';

@Module({
  imports: [LivestreamModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
