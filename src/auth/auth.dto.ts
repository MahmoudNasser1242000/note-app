import { IsEmail, IsNotEmpty, IsString, IsStrongPassword, MinLength,  } from 'class-validator';

export class SignupDto {
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
    @IsString()
    password: string;
}