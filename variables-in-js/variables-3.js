const users = [
  { id: 1, name: "Alice", role: "Admin" },
  { id: 2, name: "Bob", role: "User" },
  { id: 3, name: "Charlie", role: "User" }
];

console.table(users);

// Only show the 'name' and 'role' columns
console.table(users, ["name", "role"]);
//console.table(users, "name"); // code: 'ERR_INVALID_ARG_TYPE'

