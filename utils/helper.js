exports.deleteUserById = (array = [], id = "") => {
  return array.filter((user) => user.id != id);
};
exports.findUserById = (array = [], id = "") => {
  return array.find((user) => user.id == id);
};
exports.fetchData = async () => {
  return new Promise((resolve, reject) => {
    try {
      if (true) {
        resolve("peanut butter");
      }
    } catch (error) {
      reject("not peanut butter");
    }
  });
};
exports.fetchDataError = async () => {
  throw new Error("Error");
};

const users = [
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
];

exports.getUserById = (id) => {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.id === id);
    if (user) {
      setTimeout(() => resolve(user), 1000);
    } else reject(new Error("User data not found"));
  });
};

exports.addUser = (user) => {
  return new Promise((resolve, reject) => {
    users.push(user);

    if (users) {
      setTimeout(() => resolve(users), 1000);
    } else reject(new Error("Went something wrong"));
  });
};
