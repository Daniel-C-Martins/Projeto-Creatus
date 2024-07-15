import { Controller, Delete, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { DelService } from './del.service';

@Controller('users')
export class DelController {
   constructor(private readonly delService: DelService) { }

   @HttpCode(HttpStatus.OK)
   @Delete(':id')
   async delUser(@Param() params: any) {
      return this.delService.delUser(params.id);
   }
}
