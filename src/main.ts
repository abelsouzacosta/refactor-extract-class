export class Person {
  constructor(
    protected name: string,
    protected telephoneNumber: string,
    protected officeAreaCode: string,
    protected officeNumber: string
  ) {}

  setName(name: string): void {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  setTelephoneNumber(telephoneNumber: string): void {
    this.telephoneNumber = telephoneNumber;
  }

  getTelephoneNumber(): string {
    return this.telephoneNumber;
  }

  setOfficeAreaCode(officeAreaCode: string): void {
    this.officeAreaCode = officeAreaCode;
  }

  getOfficeAreaCode(): string {
    return this.officeAreaCode;
  }

  setOfficeNumber(officeNumber: string): void {
    this.officeNumber = officeNumber;
  }

  getOfficeNumber(): string {
    return this.officeNumber;
  }
}
