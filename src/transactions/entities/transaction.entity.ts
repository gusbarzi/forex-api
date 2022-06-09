import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TransactionDocument = Transaction & Document;

@Schema()
export class Transaction {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  balance: number;

  @Prop()
  dateCreate: Date;

  @Prop()
  userId: string;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);