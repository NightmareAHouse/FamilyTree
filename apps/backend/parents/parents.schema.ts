import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

export type ParentDocument = Parent & Document;

@Schema({collection: 'familty_tree'})
export class Parent {
    @Prop({required: true})
    name: string;

    @Prop({required: true})
    lastName: string;
}

export const ParentSchema = SchemaFactory.createForClass(Parent);
