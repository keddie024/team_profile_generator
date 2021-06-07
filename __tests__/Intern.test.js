const { expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Extend", () => {
        it("Should create an Employee object as an intern that includes a school.", () => {
            const intern = new Intern("Name", 24, "name@intern.com", "school");
            expect(intern).toEqual({ name: "Name", id: 24, email: "name@intern.com", school: "school" });
        });
    });

    test("Can get role of the intern.", () => {
        const intern = new Intern("Name", 24, "name@intern.com", "school");
        expect(intern.getRole()).toBe("Intern");
    })

    test("Can get school of the intern.", () => {
        const intern = new Intern("Name", 24, "name@intern.com", "school");
        expect(intern.getSchool()).toBe(intern.school);
    })
})