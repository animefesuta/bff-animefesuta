import { Module } from '@nestjs/common';
import { LivestreamModule } from './livestream/livestream.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    LivestreamModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
