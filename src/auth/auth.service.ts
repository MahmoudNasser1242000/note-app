import { JwtService } from '@nestjs/jwt';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';
import { SigninDto, SignupDto } from './auth.dto';
import { Response } from 'express';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private _userModel: Model<User>,
        private jwtService: JwtService
    ) {}

    async signup(body: SignupDto, res: Response) {
        const user = await this._userModel.insertMany(body)
        res.json({msg: "User added successfully", user})
    }

    async signin(body: SigninDto, res: Response) {
        const { email } = body;
        const user = await this._userModel.findOne({ email });

        if (!user)
            throw new BadRequestException("Inavlid email or password")

        const decodePassword = bcrypt.compareSync(body.password, user.password);
        if (!decodePassword)
            throw new BadRequestException("Inavlid email or password")

        const token = await this.jwtService.signAsync({userId: user._id, userName: user.name}, {secret: "Login"})
        res.json({user, Token: token})
    }
}
