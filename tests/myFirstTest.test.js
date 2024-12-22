const { deleteUserById, findUserById } = require("../utils/helper");

let userData = [];
beforeEach(() => {});
afterEach(() => {});

beforeAll(() => {
  userData = ["jhonathan", "jim", "james", "kevin", "dan", "winston"];
  console.log(userData);
});
afterAll(() => {
  userData = [];
  console.log(userData);
});

function sum(a, b) {
  return a + b;
}

describe("Number operations", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
  test("adds 2 + 3 not equal to 5", () => {
    expect(sum(2, 3)).not.toBe(4);
  });
});

describe("Testing with other matchers", () => {
  test("Testing that number is undefined", () => {
    let number = undefined;
    expect(number).not.toBeDefined();
    expect(number).toBeUndefined();
    expect(number).not.toBeNull();
    expect(number).toBeFalsy();
    expect(number).not.toBeTruthy();
  });

  test("Should expect zero to act like a zero", () => {
    let number = 0;

    expect(number).toBeDefined();
    expect(number).not.toBeUndefined();
    expect(number).not.toBeNull();
    expect(number).not.toBeTruthy();
    expect(number).toBeFalsy();
  });

  test("Number comparison", () => {
    const number = 1;
    const number1 = 2;

    expect(number + number1).toBeGreaterThan(2);
    expect(number + number1).toBeGreaterThanOrEqual(3);
    expect(number + number1).toBeLessThan(10);
    expect(number + number1).toBeLessThanOrEqual(4);
  });
  test("there is no I in team", () => {
    let string = "team  should not be in team";
    expect(string).not.toMatch(/I/);
  });

  test("Array operations", () => {
    const shoppingList = [
      "diapers",
      "kleenex",
      "trash bags",
      "paper towels",
      "milk",
    ];

    expect(shoppingList).toContain("milk");
    expect(new Set(shoppingList)).toContain("milk");
  });
});

describe("Testing reference equality", () => {
  const user = {
    name: "John",
  };
  user["age"] = 24;
  test("Should return a user object with age as 24", () => {
    expect(user).toEqual({
      name: "John",
      age: 24,
    });
  });

  test("Should return a user object with name and key", () => {
    expect(user).toEqual(
      expect.objectContaining({
        name: expect.any(String),
        age: expect.any(Number),
      })
    );
  });

  test("Array equality", () => {
    const users = ["John", "Sally", "Mary", "Curly"];
    users.push("Peter");
    expect(users).toEqual(["John", "Sally", "Mary", "Curly", "Peter"]);
    expect(users).toEqual(expect.arrayContaining([expect.any(String)]));

    const ObjectArray = [
      {
        name: "John",
        age: 45,
      },
      {
        name: "Sally",
        age: 34,
      },
    ];
    ObjectArray.push({
      name: "Mary",
      age: 43,
    });
    expect(ObjectArray).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          age: expect.any(Number),
        }),
      ])
    );
  });
});

describe("Testing imported functions", () => {
  const users = [
    {
      name: "John",
      age: 45,
      id: 1,
    },
    {
      name: "Sally",
      age: 34,
      id: 2,
    },
  ];
  test("Delete User by id", () => {
    expect(deleteUserById(users, 1)).toEqual([
      {
        name: "Sally",
        age: 34,
        id: 2,
      },
    ]);
  });
  // Test Drive development
  test("Finds a user by id from the list of users", () => {
    expect(findUserById(users, 2)).toEqual({
      name: "Sally",
      age: 34,
      id: 2,
    });
    expect(findUserById(users, 3)).toBeUndefined();
  });
});
