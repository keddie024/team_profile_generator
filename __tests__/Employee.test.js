const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("Should create an Employee object that contains the name, ID, and email.", () => {
            const employee = new Employee("Name", 24, "name@mail.com");
            expect(employee).toEqual({name: "Name", id: 24, email: "name@mail.com"});
        });
    });

    test ("Can create Employee object", () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe("object");
    })

    test ("Can get the name of the Employee", () => {
        const employee = new Employee("Name", 24, "name@mail.com");
        expect(employee.getName()).toBe(employee.name);
    })

    test ("Can get ID of the Employee", () => {
        const employee = new Employee("Name", 24, "name@mail.com");
        expect(employee.getId()).toBe(employee.id);
    })

    test ("Can get email of the Employee", () => {
        const employee = new Employee("Name", 24, "name@mail.com");
        expect(employee.getEmail()).toBe(employee.email);
    })

    test ("Can get role of the Employee", () => {
        const employee = new Employee("Name");
        expect(employee.getRole()).toBe("Name", 24, "name@mail.com");
    })
})