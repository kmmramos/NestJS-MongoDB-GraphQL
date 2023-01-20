import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()
export class Category extends Document {
    @Prop()
    name: string;

    @Prop({required: true, default: () => new Date()})
    createdAt: Date;

    @Prop({required: false, default: null})
    updatedAt: Date;
}

export const CategorySchema = SchemaFactory.createForClass(Category);