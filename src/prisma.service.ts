import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit(): Promise<void> {
    await this.$connect();
  }

  async isConnected(): Promise<boolean> {
    try {
      await this.$connect();
      return true;
    } catch (error) {
      return false;
    } finally {
      await this.$disconnect();
    }
  }
}
