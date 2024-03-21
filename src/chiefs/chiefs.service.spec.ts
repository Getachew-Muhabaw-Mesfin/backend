import { Test, TestingModule } from '@nestjs/testing';
import { ChiefsService } from './chiefs.service';

describe('ChiefsService', () => {
  let service: ChiefsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChiefsService],
    }).compile();

    service = module.get<ChiefsService>(ChiefsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
