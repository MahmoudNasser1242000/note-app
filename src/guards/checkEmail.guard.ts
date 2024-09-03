import { BadRequestException, CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Observable } from 'rxjs';
import { User } from 'src/schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CheckEmail implements CanActivate {
  constructor(@InjectModel(User.name) private _userModel: Model<User>) {}
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const {email} = req.body;
    const user = await this._userModel.findOne({email});
    
    if (user) 
      throw new BadRequestException("Email allready exist")

    const hashPassword = bcrypt.hashSync(req.body.password, 8);
    req.body.password = hashPassword
    return true;
  }
}
