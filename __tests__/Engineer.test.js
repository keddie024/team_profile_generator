const { expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Extend", () => {
        it("Should create an Employee object as an engineer that includes Github username.", () => {
            const engineer = new Engineer("Name", 24, "name@mail.com", "username");
            expect(engineer).toEqual({ name: "Name", id: 24, email: "name@mail.com", github: "username" });
        });
    });

    test("Can get role of the engineer.", () => {
        const engineer = new Engineer("Name", 24, "name@mail.com", "username");
        expect(engineer.getRole()).toBe("Engineer");
    })

    test("Can get Github username of the engineer.", () => {
        const engineer = new Engineer("Name", 24, "name@mail.com", "username");
        expect(engineer.getGithub()).toBe(engineer.github);
    })
})