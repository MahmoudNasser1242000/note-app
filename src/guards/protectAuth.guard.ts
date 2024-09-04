import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        @InjectModel(User.name) private _userModel: Model<User>,
        private jwtService: JwtService
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const req = context.switchToHttp().getRequest();
        const authorization = req.header.authorization
        if (!authorization && !authorization.startsWith("Bearer"))
            throw new UnauthorizedException();

        const token = req.header.authorization.splite(" ")[1];
        const decodeToken = await this.jwtService.verify(token, {secret: "Login"})

        const user = await this._userModel.findById(decodeToken.userId);
        if (!user)
            throw new UnauthorizedException();

        return true;
    }
}