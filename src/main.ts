import { TelephoneNumber } from "./TelephoneNumber";

export class Person {
  protected phoneNumber: TelephoneNumber;

  constructor(
    protected name: string,
    protected telephoneNumber: string,
    protected officeAreaCode: string,
    protected officeNumber: string
  ) {
    this.phoneNumber = new TelephoneNumber(officeAreaCode);
  }

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
    return this.phoneNumber.setOfficeAreaCode(officeAreaCode);
  }

  getOfficeAreaCode(): string {
    return this.phoneNumber.getOfficeAreaCode();
  }

  setOfficeNumber(officeNumber: string): void {
    this.officeNumber = officeNumber;
  }

  getOfficeNumber(): string {
    return this.officeNumber;
  }
}
