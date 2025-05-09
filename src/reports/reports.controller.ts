import { Controller, Get, Param, Query } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { PrismaModule } from '../prisma/prisma.module';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}
  @Get('user-salary/:id')
  getUserSalary(
    @Param('id') id: string,
    @Query('period') period: 'week' | 'month' | 'year',
    @Query('date') date?: string
  ) {
    const refDate = date ? new Date(date) : new Date();
    const parsedId = parseInt(id, 10);
  
    if (isNaN(parsedId)) {
      throw new Error('ID inválido');
    }
  
    return this.reportsService.getSalaryReport(parsedId, period, refDate);
  }
  @Get('user-salary')
getAllSalaryReports(
  @Query('period') period: 'week' | 'month' | 'year',
  @Query('date') date?: string
) {
  const refDate = date ? new Date(date) : new Date();
  return this.reportsService.getAllSalaryReports(period, refDate);
}

}
