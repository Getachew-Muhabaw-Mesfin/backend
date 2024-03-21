import { Module } from '@nestjs/common';
import { ChiefsService } from './chiefs.service';
import { ChiefsController } from './chiefs.controller';

@Module({
  controllers: [ChiefsController],
  providers: [ChiefsService],
})
export class ChiefsModule {}
