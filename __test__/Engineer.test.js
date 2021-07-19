const Engineer = require("../lib/Engineer");

test('create an Engineer object', () => {
    const engineer = new Engineer('Sam', 1, 'sam@gmail.com', 'samGitHub');

    expect(engineer.name).toBe('Sam');
    expect(engineer.id).toEqual(1);
    expect(engineer.email).toBe('sam@gmail.com');
    expect(engineer.github).toBe('samGitHub');
});

test("gets Engineer's name", () => {
    const engineer = new Engineer('Sam', 1, 'sam@gmail.com', 'samGitHub');

    expect(engineer.getName()).toBe('Sam');
});

test("gets Engineer's Id", () => {
    const engineer = new Engineer('Sam', 1, 'sam@gmail.com', 'samGitHub');

    expect(engineer.getId()).toEqual(1);
});

test("gets Engineer's email", () => {
    const engineer = new Engineer('Sam', 1, 'sam@gmail.com', 'samGitHub');

    expect(engineer.getEmail()).toBe('sam@gmail.com');
});

test("gets Engineer's role", () => {
    const engineer = new Engineer('Sam', 1, 'sam@gmail.com', 'samGitHub');

    expect(engineer.getRole()).toBe('Engineer')
});

test("gets Engineer's github", () => {
    const engineer = new Engineer('Sam', 1, 'sam@gmail.com', 'samGitHub');

    expect(engineer.getGithub()).toBe('samGitHub')
});