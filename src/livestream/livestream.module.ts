import { Module } from '@nestjs/common';
import { LivestreamService } from './livestream.service';
import { LivestreamController } from './livestream.controller';

@Module({
  controllers: [LivestreamController],
  providers: [LivestreamService],
})
export class LivestreamModule {}
