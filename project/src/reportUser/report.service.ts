import { Injectable } from '@nestjs/common';
import { ReportRepository } from './report.repository';
import { User } from '../interface/user';

const reportRepository = new ReportRepository();

@Injectable()
export class ReportService {
   async report() {
      return reportRepository.report();
   }
}
