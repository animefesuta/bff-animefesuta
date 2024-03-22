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
    const { stream_key, playback_ids } = await mux.video.liveStreams.create({
      playback_policy: ['public'],
      new_asset_settings: { playback_policy: ['public'] },
    });
    return { key: stream_key, id: playback_ids[0].id };
  }

  async getLatestStream() {
    return { id: '' };
  }
}
