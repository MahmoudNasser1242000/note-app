import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { NoteModule } from './note/note.module';

@Module({
  imports: [AuthModule, NoteModule, MongooseModule.forRoot('mongodb://127.0.0.1/note-app')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
