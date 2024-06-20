export interface IConfig {
  env: 'development' | 'production';
  globalPath: string;
  port: number;
  httpTimeout: number;
}
