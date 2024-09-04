import { Note } from './../schemas/note.schema';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Response } from 'express';
import { Model } from 'mongoose';
import { AddNote } from 'src/note/note.dto';

@Injectable()
export class NoteService {
    constructor(
        @InjectModel(Note.name) private _noteModel: Model<Note>
    ) {}

    async addNote(body: AddNote, req: any, res: Response) {
        
        const user = req.user
        if (JSON.stringify(user._id) !== JSON.stringify(req.params.userId)) 
            throw new BadRequestException("Can not find user with this id")
        
        const note = await this._noteModel.insertMany({...body, createdBy: user._id});
        res.status(201).json({msg: "Note added successfully", note})
    }
}
