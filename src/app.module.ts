import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { RocketMemberRepository } from './repositories/rocket-members-repository';
import { PrismaMembersRepository } from './repositories/prisma/prisma-rocket-members-repository';


@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: RocketMemberRepository,
      useClass: PrismaMembersRepository,
    },
  ],
})
export class AppModule {}
