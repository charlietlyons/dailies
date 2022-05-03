import { REGISTER, LOGIN } from "./Actions";
import bcrypt from "bcryptjs";

// TODO: bring in env to store said salt
const SALT = 10;

export default function LoginReducer(
  state = {
    isLoggedIn: false,
  },
  action
) {
  const { type, user, password } = action;

  switch (type) {
    case REGISTER:
      if (user && password) {
        bcrypt.hash(password, SALT, (err, hash) => {
          fetch("http://localhost:3001/user/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              user: user,
              password: hash,
            }),
          })
            .then((response) => response.json())
            .then((data) => console.log(data));
        });
      }
    case LOGIN:
      if (user && password) {
          return {
              isLoggedIn: action.status === "good"
          }
      }
  }

  return state;
}
