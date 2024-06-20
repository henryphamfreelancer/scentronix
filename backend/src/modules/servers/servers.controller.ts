import { Controller, Get } from '@nestjs/common';
import { ServerService } from './servers.service';
import { ListServers } from './servers.constants';
import { plainToInstance } from 'class-transformer';
import { ServerResponseDto } from './dto/servers.response.dto';

@Controller()
export class ServerController {
  constructor(private readonly serverService: ServerService) {}

  @Get('find-server')
  async findServer(): Promise<ServerResponseDto> {
    return plainToInstance(ServerResponseDto, await this.serverService.findServer(ListServers));
  }
}
