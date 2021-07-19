const Manager = require("../lib/Manager");

test('create a Manager object', () => {
    const manager = new Manager('Mike', 1, 'mike@gmail.com', 100);

    expect(manager.name).toBe('Mike');
    expect(manager.id).toEqual(1);
    expect(manager.email).toBe('mike@gmail.com');
    expect(manager.officeNumber).toEqual(100)
});

test("gets Manager's name", () => {
    const manager = new Manager('Mike', 1, 'mike@gmail.com', 100);

    expect(manager.getName()).toBe('Mike');
});

test("gets Manager's Id", () => {
    const manager = new Manager('Mike', 1, 'mike@gmail.com', 100);

    expect(manager.getId()).toEqual(1);
});

test("gets Manager's email", () => {
    const manager = new Manager('Mike', 1, 'mike@gmail.com', 100);

    expect(manager.getEmail()).toBe('mike@gmail.com')
});

test("gets Manager's role", () => {
    const manager = new Manager('Mike', 1, 'mike@gmail.com', 100);

    expect(manager.getRole()).toBe('Manager')
});