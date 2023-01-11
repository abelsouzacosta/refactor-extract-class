import { isExportDeclaration } from "typescript";
import { Person } from "../src/main";

describe("Class Person", () => {
  let person: Person;

  beforeAll(() => {
    person = new Person("Abel Souza", "992137877", "75", "32247566");
  });

  describe("Attribute Name", () => {
    it("should return the name setted in the constructor", () => {
      let result = person.getName();

      expect(result).toBe("Abel Souza");
    });

    it("should set a new name for the entity", () => {
      let operation = person.setName("Abel Junior");

      let name = person.getName();

      expect(operation).toBe(undefined);
      expect(name).toBe("Abel Junior");
    });
  });

  describe("Attribute Telephone Number", () => {
    it("should return the telephone number setted in the constructor", () => {
      let result = person.getTelephoneNumber();

      expect(result).toBe("992137877");
    });

    it("should set a new telephone number for the entity", () => {
      let operation = person.setTelephoneNumber("999999999");

      let telephoneNumber = person.getTelephoneNumber();

      expect(operation).toBe(undefined);
      expect(telephoneNumber).toBe("999999999");
    });
  });

  describe("Attribute Office Area Code", () => {
    it("should return the office area code setted in the constructor", () => {
      let result = person.getOfficeAreaCode();

      expect(result).toBe("75");
    });

    it("should set a new office area code for the entity", () => {
      let operation = person.setOfficeAreaCode("74");

      let officeArea = person.getOfficeAreaCode();

      expect(operation).toBe(undefined);
      expect(officeArea).toBe("74");
    });
  });

  describe("Attribute Office Phone NUmber", () => {
    it("should return the office phone number setted in the constructor", () => {
      let result = person.getOfficeNumber();

      expect(result).toBe("32247566");
    });

    it("should set a new office phone number to the entity", () => {
      let operation = person.setOfficeNumber("32233331");

      let officeNumber = person.getOfficeNumber();

      expect(operation).toBe(undefined);
      expect(officeNumber).toBe("32233331");
    });
  });
});
