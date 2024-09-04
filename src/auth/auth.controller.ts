import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninDto, SignupDto } from './auth.dto';
import { Response } from 'express';
import { CheckEmail } from 'src/guards/checkEmail.guard';

@Controller('api/v1/auth')
export class AuthController {
    constructor(private readonly _authService: AuthService) { }

    @Post("signup")   
    @UseGuards(CheckEmail)
    signup(@Body() body: SignupDto, @Res() res: Response) {
        return this._authService.signup(body, res);
    }

    @Post("signin")   
    signin(@Body() body: SigninDto, @Res() res: Response) {
        return this._authService.signin(body, res);
    }
}
