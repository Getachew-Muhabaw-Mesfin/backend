import { Module } from "@nestjs/common";
import { CeoService } from "./ceo.service";
import { CeoController } from "./ceo.controller";

@Module({
  controllers: [CeoController],
  providers: [CeoService],
})
export class CeoModule {}
