import { Module } from "@nestjs/common";
import { CeoService } from "./ceo.service";
import { CeoController } from "./ceo.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CEO } from "./entities/ceo.entity";

@Module({
  imports: [TypeOrmModule.forFeature([CEO])],
  controllers: [CeoController],
  providers: [CeoService],
})
export class CeoModule {}
