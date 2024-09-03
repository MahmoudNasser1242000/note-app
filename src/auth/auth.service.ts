import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private _userModel: Model<User>) {}
    signup(): string {
        return 'Hello World!';
    }
}
