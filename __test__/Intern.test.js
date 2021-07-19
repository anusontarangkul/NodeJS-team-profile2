const Intern = require("../lib/Intern");

test('create an Intern object', () => {
    const intern = new Intern('Greg', 1, 'greg@gmail.com', 'MIT');

    expect(intern.name).toBe('Greg');
    expect(intern.id).toEqual(1);
    expect(intern.email).toBe('greg@gmail.com');
    expect(intern.school).toBe('MIT');
});

test("gets Intern's name", () => {
    const intern = new Intern('Greg', 1, 'greg@gmail.com', 'MIT');

    expect(intern.getName()).toBe('Greg');
});

test("gets Intern's Id", () => {
    const intern = new Intern('Greg', 1, 'greg@gmail.com', 'MIT');

    expect(intern.getId()).toEqual(1);
});

test("gets Intern's email", () => {
    const intern = new Intern('Greg', 1, 'greg@gmail.com', 'MIT');

    expect(intern.getEmail()).toBe('greg@gmail.com');
});

test("gets Intern's role", () => {
    const intern = new Intern('Greg', 1, 'greg@gmail.com', 'MIT');

    expect(intern.getRole()).toBe('Intern');
});

test("gets Intern's school", () => {
    const intern = new Intern('Greg', 1, 'greg@gmail.com', 'MIT');

    expect(intern.getSchool()).toBe('MIT');
});