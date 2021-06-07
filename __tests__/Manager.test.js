const { expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Extend", () => {
        it("Should create an Employee object as a manager that includes office number.", () => {
            const manager = new Manager("Name", 24, "name@mail.com", "officeNumber");
            expect(manager).toEqual({ name: "Name", id: 24, email: "name@mail.com", officeNumber: "officeNumber" });
        });
    });

    test("Can get role of the manager.", () => {
        const manager = new Manager("Name", 24, "name@mail.com", "officeNumber");
        expect(manager.getRole()).toBe("Manager");
    })

    test("Can get office number of the manager", () => {
        const manager = new Manager("Name", 24, "name@mail.com", "officeNumber");
        expect(manager.getOfficeNumber()).toBe(manager.officeNumber);
    })
})