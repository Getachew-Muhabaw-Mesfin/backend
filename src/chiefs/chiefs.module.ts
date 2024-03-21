import { Module } from "@nestjs/common";
import { ChiefsService } from "./chiefs.service";
import { ChiefsController } from "./chiefs.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Chiefs } from "./entities/chief.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Chiefs])],
  controllers: [ChiefsController],
  providers: [ChiefsService],
})
export class ChiefsModule {}
