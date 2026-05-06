import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateMessageDto {
  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @IsNotEmpty()
  @IsString()
  @Length(10, 500)
  message!: string;
}
