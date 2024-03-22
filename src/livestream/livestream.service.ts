import Mux from '@mux/mux-node';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LivestreamService {
  constructor(private readonly configService: ConfigService) {}
  async create() {
    const mux = new Mux({
      tokenId: this.configService.get('MUX_TOKEN_ID'),
      tokenSecret: this.configService.get('MUX_TOKEN_SECRET'),
    });
    return await mux.video.liveStreams.create({
      playback_policy: ['public'],
      new_asset_settings: { playback_policy: ['public'] },
    });
  }
}
