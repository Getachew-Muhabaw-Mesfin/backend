import { Test, TestingModule } from '@nestjs/testing';
import { CeoController } from './ceo.controller';
import { CeoService } from './ceo.service';

describe('CeoController', () => {
  let controller: CeoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CeoController],
      providers: [CeoService],
    }).compile();

    controller = module.get<CeoController>(CeoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
