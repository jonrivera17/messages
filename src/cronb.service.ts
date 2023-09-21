import { Inject, Injectable, NotFoundException } from "@nestjs/common";
 import { Cron, CronExpression } from "@nestjs/schedule";
 import { ExternalService } from "./external.service";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateNoticiasDto } from "./dto/create.noticias.dto";
 @Injectable()
 export class CronbService{
    noticiasRepository: any;

    constructor(private readonly externalRepositor: ExternalService){}

      createExternal(noticias: CreateNoticiasDto){
         const newNoticias = this.noticiasRepository.create(noticias)
         return this.noticiasRepository.save(newNoticias)
         
      }

   



   //    @Cron( '*/30 * * * * * ' )
   //   processo() {
   //       this.external.request()
   //    }


}