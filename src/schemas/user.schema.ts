import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop({
        type: String,
        required: true,
        minlength: [3, "Name must be in minimum 3 characters"],
        trim: true
    })
    name: string;

    @Prop({
        type: String,
        required: true,
        trim: true,
    })
    email: string;

    @Prop({
        type: String,
        required: true,
        trim: true,
    })
    password: string;
}

export const userSchema = SchemaFactory.createForClass(User);
export const userModel = MongooseModule.forFeature([{ name: User.name, schema: userSchema }])