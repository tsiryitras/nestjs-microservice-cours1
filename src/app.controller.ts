import { Body, Controller, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AddNumberDto } from './add.number.dto';
// import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  add(@Body() data: AddNumberDto) {
    Logger.log(data);
    return this.appService.add(data.nbr1, data.nbr2);
  }
}
