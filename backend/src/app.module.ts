import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import * as config from 'config';
import { AppController } from './app.controller';
import { ServerModule } from './modules/servers/servers.module';
import { AppService } from './app.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: config.get('httpTimeout'),
    }),
    ServerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
