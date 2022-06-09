import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionModule } from './transactions/transaction.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://gusbarzi:330133a64obh@forex0.1umnwl1.mongodb.net/?retryWrites=true&w=majority'),
    UsersModule,
    TransactionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
