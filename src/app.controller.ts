import { Body, Controller, Get, Post } from '@nestjs/common';
import { PuserService } from './puser.service';

@Controller('api')
export class AppController {
  constructor(
    protected readonly puserService: PuserService
  ) { }

  @Post('message')
  chat(
    @Body('username') username: string,
    @Body('message') message: string
  ) {
    return this.puserService.message("chat", "message", {
      username,
      message
    })
  }
}
