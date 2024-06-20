import { Test, TestingModule } from '@nestjs/testing';
import { ServerController } from './servers.controller';
import { ServerService } from './servers.service';
import { HttpModule } from '@nestjs/axios';
import { ExpectedServer, MockListServers } from './servers.mock';
import { HttpException } from '@nestjs/common';

describe('AppController', () => {
  let serverService: ServerService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule
      ],
      controllers: [ServerController],
      providers: [ServerService],
    }).compile();

    serverService = app.get<ServerService>(ServerService);
  });

  describe('root', () => {
    it('should return Expected Object', async () => {
      expect(await serverService.findServer(MockListServers)).toEqual(ExpectedServer);
    });
    it('should throw exception', async () => {
      try {
        await serverService.findServer([])
      } catch (e) {
        expect(e).toBeInstanceOf(HttpException);
      }
    });
  });
});
