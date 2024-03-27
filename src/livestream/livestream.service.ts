import Mux from '@mux/mux-node';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateLivestreamDto } from './dto/create-livestream.dto';
import axiosInstance from 'src/utils/axios';

@Injectable()
export class LivestreamService {
  constructor(private readonly configService: ConfigService) {}
  async create(createLivestreamDto: CreateLivestreamDto, token: string) {
    const mux = new Mux({
      tokenId: this.configService.get('MUX_TOKEN_ID'),
      tokenSecret: this.configService.get('MUX_TOKEN_SECRET'),
    });
    const { stream_key, playback_ids } = await mux.video.liveStreams.create({
      playback_policy: ['public'],
      new_asset_settings: { playback_policy: ['public'] },
    });
    createLivestreamDto.key = stream_key;
    createLivestreamDto.roomId = playback_ids[0].id;
    createLivestreamDto.url = 'rtmp://global-live.mux.com:5222/app';
    const { data } = await axiosInstance.post(
      '/api/v1/fesuta/live/createRoom',
      createLivestreamDto,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      },
    );

    return data;
  }

  async getLiveRoom(token: string) {
    const { data } = await axiosInstance.get(
      '/api/v1/fesuta/live/getLiveRoom',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      },
    );
    return data;
  }

  async closeStream(token: string) {
    const { data } = await axiosInstance.get(
      '/api/v1/fesuta/live/closeStream',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      },
    );
    return data;
  }

  async updateStream(updateLivestreamDto: CreateLivestreamDto, token: string) {
    const { data } = await axiosInstance.post(
      '/api/v1/fesuta/live/updateStream',
      updateLivestreamDto,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      },
    );
    return data;
  }

  async getLatestStream(token: string) {
    const { data } = await axiosInstance.get('/api/v1/fesuta/live/latestRoom', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
    return data;
  }

  async getRoomStream(token: string, uid: string) {
    const { data } = await axiosInstance.get(
      `/api/v1/fesuta/live/getRoomStream/${uid}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      },
    );
    return data;
  }
}
