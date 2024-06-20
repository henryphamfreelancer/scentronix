import { Module } from '@nestjs/common';
import { ServerController } from './servers.controller';
import { ServerService } from './servers.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [ServerController],
  providers: [ServerService],
})
export class ServerModule {}
