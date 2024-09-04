import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { NoteService } from './note.service';
import { AuthGuard } from 'src/guards/protectAuth.guard';
import { AddNote } from 'src/note/note.dto';
import { Response, Request } from 'express';

@Controller('api/v1/note')
export class NoteController {
    constructor(private readonly _noteService: NoteService) { }

    @Post("/:userId")
    @UseGuards(AuthGuard)
    addNote(@Body() body: AddNote, @Req() req: Request, @Res() res: Response) {
        return this._noteService.addNote(body, req, res);
    }

    @Get("/")
    @UseGuards(AuthGuard)
    getAllNotes(@Res() res: Response) {
        return this._noteService.getAllNotes(res);
    }
}
