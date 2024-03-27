import { Body, Controller, Get, Headers, Param, Post } from '@nestjs/common';
import { LivestreamService } from './livestream.service';
import { CreateLivestreamDto } from './dto/create-livestream.dto';

@Controller('livestream')
export class LivestreamController {
  constructor(private readonly livestreamService: LivestreamService) {}

  @Post('/create')
  async create(
    @Body() createLivestreamDto: CreateLivestreamDto,
    @Headers('Authorization') token: string,
  ) {
    return this.livestreamService.create(createLivestreamDto, token);
  }

  @Get('/getLiveRoom')
  async getLiveRoom(@Headers('Authorization') token: string) {
    return this.livestreamService.getLiveRoom(token);
  }

  @Get('/close')
  async close(@Headers('Authorization') token: string) {
    return this.livestreamService.closeStream(token);
  }

  @Post('/update')
  async update(
    @Body() createLivestreamDto: CreateLivestreamDto,
    @Headers('Authorization') token: string,
  ) {
    return this.livestreamService.updateStream(createLivestreamDto, token);
  }

  @Get('/latest')
  async getLatestStream(@Headers('Authorization') token: string) {
    return this.livestreamService.getLatestStream(token);
  }

  @Get('/getRoomStream/:uid')
  async getRoomStream(
    @Headers('Authorization') token: string,
    @Param('uid') uid: string,
  ) {
    return this.livestreamService.getRoomStream(token, uid);
  }
}
