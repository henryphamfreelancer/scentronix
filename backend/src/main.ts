import * as dotenv from 'dotenv';
dotenv.config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors({ origin: '*' });
  app.setGlobalPrefix('api');

  const port = config.get('port');

  await app.listen(port, () => {
    console.log(
      `App is running on ${port}`,
    );
  });
}

bootstrap();
