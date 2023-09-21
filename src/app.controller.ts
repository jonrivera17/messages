import { Body, Controller, Get, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ExternalService } from './external.service';
import { json } from './articulos.json';
import {v4 as uuid} from 'uuid';
import { CreateNoticiasDto } from './dto/create.noticias.dto';
@Controller()
export class AppController {
  externalService: any;
  constructor(private readonly external: ExternalService) {}

  @Get()
  getNewApi() {
    this.external.request()
  }

  @Get('/prueba')
  getArticulo( @Param ('id') id: string){
    return json.articles[0];
  }

  @Post('/prueba')
  createNoticias(@Body('id') createNoticiasDto: CreateNoticiasDto){
    return this.externalService.createNoticias(createNoticiasDto)
  }
  
}