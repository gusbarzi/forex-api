import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { Transaction, TransactionSchema } from './entities/transaction.entity';
import { UsersModule } from 'src/users/users.module';


@Module({
  imports: [MongooseModule.forFeature([{ name: Transaction.name, schema: TransactionSchema }]), UsersModule],
  controllers: [TransactionController],
  providers: [TransactionService]
})
export class TransactionModule {}
