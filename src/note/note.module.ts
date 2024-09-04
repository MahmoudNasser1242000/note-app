import { Module } from '@nestjs/common';
import { noteModel } from 'src/schemas/note.schema';
import { NoteController } from './note.controller';
import { NoteService } from './note.service';

@Module({
    imports: [noteModel],
    controllers: [NoteController],
    providers: [NoteService],
})
export class NoteModule { }
