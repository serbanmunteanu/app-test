import { Injectable } from '@nestjs/common';
import * as process from 'process';

@Injectable()
export class AppService {
  getHello(): string {
    return `${process.env.SERBYX} - Testingggg ci/cd - 2`;
  }
}
