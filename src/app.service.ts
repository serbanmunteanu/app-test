import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService) {}

  getHello(): string {
    return `Hello World! bombumbom`;
  }

  async getStatus(): Promise<any> {
    const isConnected = await this.prismaService.isConnected();
    return { status: isConnected };
  }
}
