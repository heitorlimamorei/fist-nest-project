import { IsNotEmpty, Length } from 'class-validator';

export default class UpdateTeamMemberBody {
  @IsNotEmpty()
  id: string;
  
  @IsNotEmpty()
  @Length(5, 100)
  name: string;

  @IsNotEmpty({
    message: 'O campo function é obrigatório!',
  })
  function: string;
}
