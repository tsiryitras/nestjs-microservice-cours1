import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  add(nbr1: number, nbr2: number): number {
    return Number(nbr1) + Number(nbr2);
  }
}
