import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';

export type CatDocument = HydratedDocument<Note>;

@Schema()
export class Note {
    @Prop({
        type: String,
        required: true,
        minlength: [3, "Name must be in minimum 3 characters"],
        trim: true
    })
    title: string;

    @Prop({
        type: String,
        required: true,
        minlength: [50, "Description must be in minimum 50 characters"],
        trim: true,
    })
    description: string;

    @Prop({
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
    })
    createdBy: ObjectId;
}

export const noteSchema = SchemaFactory.createForClass(Note);
export const noteModel = MongooseModule.forFeature([{ name: Note.name, schema: noteSchema }])