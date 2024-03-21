import { Test, TestingModule } from '@nestjs/testing';
import { ChiefsController } from './chiefs.controller';
import { ChiefsService } from './chiefs.service';

describe('ChiefsController', () => {
  let controller: ChiefsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChiefsController],
      providers: [ChiefsService],
    }).compile();

    controller = module.get<ChiefsController>(ChiefsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
