import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IServer } from './servers.interface';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class ServerService {
  constructor(private readonly httpService: HttpService) {}

  async findServer(servers: IServer[]): Promise<IServer> {
    const tasks = servers.map(async (server: IServer) => {
      const isOnline = await this.isServerOnline(server.url);
      return {
        ...server,
        isOnline
      };
    });

    const onlineServers: IServer[] = (await Promise.all(tasks))
      .filter(({isOnline}) => isOnline)
      .sort(({priority: priorityA}: IServer, {priority: priorityB}: IServer) => priorityA - priorityB);

    if (!onlineServers.length) {
      throw new HttpException({
        error: 'No servers available',
      }, HttpStatus.BAD_GATEWAY)
    }

    return onlineServers[0];
  }

  private async isServerOnline(url: string): Promise<boolean> {
    try {
      const { status } = await firstValueFrom(this.httpService.get(url));
      return status >= 200 && status <= 299;
    } catch (error) {
      return false;
    }
  }
}
