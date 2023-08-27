import { PrismaService } from "src/database/prisma.service";
import { RocketMemberRepository } from "../rocket-members-repository";
import { randomUUID } from 'node:crypto'; 
import { Injectable } from "@nestjs/common";
import { TeamMember } from "src/model/team-member.model";

@Injectable()
export class PrismaMembersRepository implements RocketMemberRepository {
  constructor(private prisma: PrismaService) {};

  async get(): Promise<TeamMember[]> {
    return await this.prisma.rocketTeamMember.findMany();
  }
  async getById(id: string): Promise<TeamMember> {
    return await this.prisma.rocketTeamMember.findUnique({
      where: {
        id: id,
      },
    });
  }
  
  async create(name: string, mememberFunction: string): Promise<void> {
    await this.prisma.rocketTeamMember.create({
      data: {
        id: randomUUID(),
        name,
        function: mememberFunction,
      },
    });
  }
  
  async update(id: string, name: string, mememberFunction: string): Promise<TeamMember> {
    const updatedUser = await this.prisma.rocketTeamMember.update({
      where: {
        id: id,
      },
      data: {
        name,
        function: mememberFunction,
      },
    });
    return {
      ...updatedUser,
    };
  }

  async delete(id: string): Promise<void> {
    await this.prisma.rocketTeamMember.delete({
      where: {
        id: id,
      },
    });
  }
}