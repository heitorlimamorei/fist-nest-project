import { TeamMember } from "src/model/team-member.model";

export abstract class RocketMemberRepository {
    abstract get(): Promise<TeamMember[]>

    abstract create(name: string, mememberFunction: string): Promise<void>;

    abstract update(id: string, name: string, mememberFunction: string): Promise<TeamMember>;

    abstract delete(id: string): Promise<void>;

    abstract getById(id: string): Promise<TeamMember>;
}