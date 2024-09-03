import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';
import { SignupDto } from './auth.dto';
import { Response } from 'express';

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private _userModel: Model<User>) {}

    async signup(body: SignupDto, res: Response) {
        const user = await this._userModel.insertMany(body)
        res.json({msg: "User added successfully", user})
    }
}
