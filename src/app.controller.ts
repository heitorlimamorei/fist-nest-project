import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import CreateTeamMemberBody from './model/create-team-member.model';
import { RocketMemberRepository } from './repositories/rocket-members-repository';
import UpdateTeamMemberBody from './model/update-team-member.model';


@Controller()
export class AppController {
  constructor(private rocketMembersRepository: RocketMemberRepository) {}

  @Get('member')
  async getMember() {
    const members = await this.rocketMembersRepository.get();

    return {
      members,
    };
  }

  @Get('member/:id')

  async getMemberById(@Param('id') id: string) {
    const member = await this.rocketMembersRepository.getById(id);

    return {
      member,
    }
  }

  

  @Post('member')
  async postMember(@Body() body: CreateTeamMemberBody) {
    const {name, function: mememberFunction} = body;

    await this.rocketMembersRepository.create(name, mememberFunction);
  }


  @Put('member')
  async putMember(@Body() body:UpdateTeamMemberBody) {
    const {id, name, function: mememberFunction} = body;
    
    const updatedMember = await this.rocketMembersRepository.update(id, name, mememberFunction);
    return {
      updatedMember: updatedMember,
    }
  }

  @Delete('member/:id')

  async deleteMember(@Param('id') id: string) {
    await this.rocketMembersRepository.delete(id);
  }
}