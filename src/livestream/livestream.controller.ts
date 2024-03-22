import { Controller, Get } from '@nestjs/common';
import { LivestreamService } from './livestream.service';

@Controller('livestream')
export class LivestreamController {
  constructor(private readonly livestreamService: LivestreamService) {}

  @Get('/create')
  async create() {
    return this.livestreamService.create();
  }

  @Get('/latest')
  async getLatestStream() {
    return this.livestreamService.getLatestStream();
  }
}
