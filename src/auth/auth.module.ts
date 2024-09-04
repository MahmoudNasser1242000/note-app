import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { userModel } from 'src/schemas/user.schema';
import { JwtService } from '@nestjs/jwt';

@Module({
    imports: [userModel],
    controllers: [AuthController],
    providers: [AuthService, JwtService],
  })
export class AuthModule {}
