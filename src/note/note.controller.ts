import { Controller, Post } from '@nestjs/common';
import { NoteService } from './note.service';

@Controller('api/v1/note')
export class NoteController {
    constructor(private readonly _noteService: NoteService) {}

  @Post()
  getHello() {
    // return this.appService.getHello();
  }
}
