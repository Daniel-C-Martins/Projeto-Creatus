import { Controller, HttpCode, HttpStatus, Get } from '@nestjs/common';
import { ReportService } from './report.service';

@Controller('report')
export class ReportController {
   constructor(private readonly reportService: ReportService) { }

   @HttpCode(HttpStatus.OK)
   @Get()
   async report() {
      return this.reportService.report();
   }
}