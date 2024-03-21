import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ChiefsService } from "./chiefs.service";
import { CreateChiefDto } from "./dto/create-chief.dto";
import { UpdateChiefDto } from "./dto/update-chief.dto";

@Controller("chiefs")
export class ChiefsController {
  constructor(private readonly chiefsService: ChiefsService) {}

  @Post()
  create(@Body() createChiefDto: CreateChiefDto) {
    return this.chiefsService.create(createChiefDto);
  }

  @Get()
  findAll() {
    return this.chiefsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.chiefsService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateChiefDto: UpdateChiefDto) {
    return this.chiefsService.update(+id, updateChiefDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.chiefsService.remove(+id);
  }
}
