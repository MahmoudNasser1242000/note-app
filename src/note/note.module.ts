import { Module } from '@nestjs/common';
import { noteModel } from 'src/schemas/note.schema';
import { NoteController } from './note.controller';
import { NoteService } from './note.service';
import { userModel } from 'src/schemas/user.schema';
import { JwtService } from '@nestjs/jwt';

@Module({
    imports: [noteModel, userModel],
    controllers: [NoteController],
    providers: [NoteService, JwtService],
})
export class NoteModule { }
