import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { TransactionService } from './transaction.service';


@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get('userid/:id')
  userid(@Param('id') id: string) {
    return this.transactionService.findBindUserId(id)
  }  

  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionService.create(createTransactionDto);
  }
}
