import { IsEmail, IsNotEmpty, IsString, IsStrongPassword, MinLength,  } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(3, {
        message: "name must be in minimum 3 characters"
    })
    name: string;

    @IsEmail({}, {message: "Invalid enail"})
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @IsStrongPassword()
    @IsString()
    password: string;
}