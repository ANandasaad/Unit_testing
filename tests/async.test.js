const {
  fetchData,
  fetchDataError,
  fetchError,
  getUserById,
  addUser,
} = require("../utils/helper");

describe("Asynchronous Testing", () => {
  test("the data is peanut butter", async () => {
    await expect(fetchData()).resolves.toBe("peanut butter");
  });
  test("the data is peanut butter", async () => {
    const data = await fetchData();
    expect(data).toBe("peanut butter");
  });
  test("the data is error message", async () => {
    await expect(fetchDataError()).rejects.toThrow("Error");
  });
  test("the fetch fails and match the error", async () => {
    expect.assertions(1);
    try {
      await fetchDataError();
    } catch (error) {
      expect(error.message).toMatch(error.message);
    }
  });
});

describe("Async testing with data", () => {
  test("get user by id promise handling", () => {
    const id = 1;
    const user = { name: "John", age: "16", id: 1 };
    expect.assertions(3);
    return getUserById(id).then((res) => {
      expect(res.id).toBe(user.id);
      expect(res.name).toBe(user.name);
      expect(res.age).toBe(user.age);
    });
  });

  test("get user and handling by async/await", async () => {
    const id = 2;
    const user = {
      name: "Abarth",
      age: "19",
      id: 2,
    };
    const res = await getUserById(id);
    expect.assertions(3);
    expect(res.name).toBe(user.name);
    expect(res.age).toBe(user.age);
    expect(res.id).toBe(user.id);
  });
  test("add user", async () => {
    const user = {
      name: "Bob",
      age: "19",
      id: 4,
    };
    const res = await addUser(user);
    expect.assertions(1);
    expect(res).toEqual([
      {
        name: "John",
        age: "16",
        id: 1,
      },
      {
        name: "Abarth",
        age: "19",
        id: 2,
      },
      {
        name: "Chris",
        age: "20",
        id: 3,
      },
      {
        name: "Bob",
        age: "19",
        id: 4,
      },
    ]);
  });
});
