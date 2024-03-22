import { Controller, Post } from '@nestjs/common';
import { LivestreamService } from './livestream.service';

@Controller('livestream')
export class LivestreamController {
  constructor(private readonly livestreamService: LivestreamService) {}

  @Post()
  create() {}
}
