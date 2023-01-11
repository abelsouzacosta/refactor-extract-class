export class TelephoneNumber {
  constructor(protected areaCode: string, protected number: string) {}

  setAreaCode(areaCode: string): void {
    this.areaCode = areaCode;
  }

  getAreaCode(): string {
    return this.areaCode;
  }

  setNumber(number: string): void {
    this.number = number;
  }

  getNumber(): string {
    return this.number;
  }
}
