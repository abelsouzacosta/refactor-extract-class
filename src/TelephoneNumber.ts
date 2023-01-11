export class TelephoneNumber {
  constructor(protected officeAreaCode: string) {}

  setOfficeAreaCode(officeAreaCode: string): void {
    this.officeAreaCode = officeAreaCode;
  }

  getOfficeAreaCode(): string {
    return this.officeAreaCode;
  }
}
