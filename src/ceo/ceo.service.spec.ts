import { Test, TestingModule } from "@nestjs/testing";
import { CeoService } from "./ceo.service";

describe("CeoService", () => {
  let service: CeoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CeoService],
    }).compile();

    service = module.get<CeoService>(CeoService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
