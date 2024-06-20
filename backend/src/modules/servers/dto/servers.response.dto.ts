import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ServerResponseDto {
  @Expose()
  url: string;

  @Expose()
  priority: number;
}