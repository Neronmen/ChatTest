import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PuserService } from './puser.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PuserService],
})
export class AppModule { }
