import { Module } from "@nestjs/common";
import { ChiefsService } from "./chiefs.service";
import { ChiefsController } from "./chiefs.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Chiefs } from "./entities/chief.entity";
import { CEO } from "src/ceo/entities/ceo.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Chiefs, CEO])],
  controllers: [ChiefsController],
  providers: [ChiefsService],
})
export class ChiefsModule {}
