import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { Transaction, TransactionDocument } from './entities/transaction.entity';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TransactionService {
  constructor(
      @InjectModel(Transaction.name) private transactionModel: Model<TransactionDocument>,
        private readonly usersService: UsersService
    ) {}

    async create(createTransactionDto: CreateTransactionDto) {

    const transaction = new this.transactionModel(createTransactionDto);
    transaction.dateCreate = new Date()
    
    const user = await this.usersService.findOne(createTransactionDto.userId);
    transaction.balance = user.balance
    transaction.firstName = user.firstName
    transaction.lastName = user.lastName

    await this.usersService.update(user.id, user)
    return transaction.save();

  }

  async findBindUserId(userId: string) {
    const filter = {
      userId: userId,
    }
    const transacExist = await this.transactionModel.find(filter)

    return transacExist
 }
}