import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class AddNote {
    @IsNotEmpty()
    @IsString()
    @MinLength(3, {
        message: "Title must be in minimum 3 characters"
    })
    title: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3, {
        message: "Description must be in minimum 50 characters"
    })
    description: string;
}