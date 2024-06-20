import { IConfig } from './interface';

const defaultConfig: IConfig = {
  env: (process.env.APP_ENV as any) || 'development',
  globalPath: '/api',
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
  httpTimeout: process.env.HTTP_TIMEOUT ? parseInt(process.env.HTTP_TIMEOUT) : 5000,
};

export default defaultConfig;
