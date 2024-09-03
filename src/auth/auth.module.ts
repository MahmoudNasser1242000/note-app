import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { userModel } from 'src/schemas/user.schema';

@Module({
    imports: [userModel],
    controllers: [AuthController],
    providers: [AuthService],
  })
export class AuthModule {}
