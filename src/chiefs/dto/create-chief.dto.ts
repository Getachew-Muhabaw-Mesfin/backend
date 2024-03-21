export class CreateChiefDto {
  name: string;
  description: string;
  reportTo: number;
  manages: number[];
}
