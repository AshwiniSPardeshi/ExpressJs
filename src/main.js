const express = require("express");
const app = express();

// http://localhost:4000/users

const { selectAllUser } = require("./user");

app.get("/users", (req, res) => {
  const list = await selectAllUser();
  res.json(list);
});

app.listen(4000, () => console.log("Server starte"));
