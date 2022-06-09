import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop({type: String})
  email: string;

  @Prop({type: String})
  password: string;

  @Prop()
  balance: number;

  @Prop()
  dolar: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
