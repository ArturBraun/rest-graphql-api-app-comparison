const users = [
  {
    id: 0,
    firstName: "Kate",
    surname: "Anderson",
    dateOfBirth: "10-02-1990",
    gender: "W",
  },
  {
    id: 1,
    firstName: "Peter",
    surname: "Smith",
    dateOfBirth: "12-09-1980",
    gender: "M",
  },
];

const findUserById = (id) => users.find((user) => user.id === id);

export { findUserById };
