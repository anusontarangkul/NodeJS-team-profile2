const Employee = require("../lib/Employee");

test('create an Employee objecct', () => {
    const employee = new Employee('Jeff', 1, 'jeff@gmail.com');

    expect(employee.name).toBe('Jeff');
    expect(employee.id).toEqual(1);
    expect(employee.email).toBe('jeff@gmail.com');
});

test("gets Employee's name", () => {
    const employee = new Employee('Jeff', 1, 'jeff@gmail.com');

    expect(employee.getName()).toBe('Jeff');
});

test("gets Employee's Id", () => {
    const employee = new Employee('Jeff', 1, 'jeff@gmail.com');

    expect(employee.getId()).toEqual(1);
});

test("gets Employee's email", () => {
    const employee = new Employee('Jeff', 1, 'jeff@gmail.com');

    expect(employee.getEmail()).toBe('jeff@gmail.com')
});

test("gets Employee's role", () => {
    const employee = new Employee('Jeff', 1, 'jeff@gmail.com');

    expect(employee.getRole()).toBe('Employee')
});