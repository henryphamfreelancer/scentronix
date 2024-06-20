import { IServer } from './servers.interface';

export const ExpectedServer: IServer ={
  "url": "http://app.scnt.me",
  "priority": 3,
  "isOnline": true
}

export const MockListServers: IServer[] = [
  {
    "url": "https://does-not-work.perfume.new",
    "priority": 1
  },
  {
    "url": "https://gitlab.com",
    "priority": 4
  },
  {
    ...ExpectedServer,
  },
  {
    "url": "https://offline.scentronix.com",
    "priority": 2
  }
];
