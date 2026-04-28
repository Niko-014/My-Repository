import express from "express";

const app = express();

const users = ["saba", "vasiko", "niko"];

app.get("/users/:id", (request, respond) => {
  const parsedId = parseInt(req.params.id);

  if (isNaN(parsedId)) {
    return res.send("use number");
  }

  if (parsedId >= 0 && parsedId < users.length) {
    res.send(users[parsedId]);
  } else {
    return res.send("use smaller num");
  }
});
app.get("/users", (request, respond) => respond.send(users));

app.post("/users", (request, response) => {
  const body = request.body;

  const newId = users[users.length - 1].id + 1;
  const newUser = {
    id: newId,
    username: body.username,
    password: body.password,
  };

  users.push(newUser);
  response.send(users);
});

app.listen(3000, () => {
  console.log("app is listening at http://localhost:3000");
});
