import express from "express";
import "express-async-errors";

let loginData = [
  {
    id: "lse126",
    password: "@securities126",
    name: "Lee Seong Eun",
    email: "lsevina126@gmail.com",
    url: "https://i.pinimg.com/474x/e2/2c/b9/e22cb965ccd406838b496358fd5d989a.jpg",
  },
  {
    id: "lse125",
    password: "@securities126",
    name: "Park Seong Eun",
    email: "lsevina126@gmail.com",
    url: "https://i.pinimg.com/474x/e2/2c/b9/e22cb965ccd406838b496358fd5d989a.jpg",
  },
];

const loginRouter = express.Router();

// GET /login?id=:id
loginRouter.get("/", (req, res, next) => {
  const id = req.query.id;
  const data = loginData.find((data) => data.id === id);
  res.status(200).json(data);
});

loginRouter.post("/", (req, res, next) => {
  const { id, password, name, email, url } = req.body;
  const newLoginData = {
    id: id.toString(),
    password: password.toString(),
    name: name.toString(),
    email: email.toString(),
    url: url.toString(),
  };
  loginData.push(newLoginData);
  res.status(201).json(newLoginData);
});

export default loginRouter;
