import { Note } from './../schemas/note.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class NoteService {
    constructor(@InjectModel(Note.name) private _noteModel: Model<Note>) {}
}
