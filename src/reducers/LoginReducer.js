import { REGISTER, LOGIN } from "./Actions";
import bcrypt from "bcryptjs";

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
        bcrypt.hash(password, 10, async (err, hash) => {
          fetch("http://localhost:3001/user/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              user: user,
              password: hash,
            }),
          })
            .then(async (response) => await response.json())
            .then(async (data) => console.log(await data));
        });
      }

      return state;
    case LOGIN:
      if (user !== null && password !== null) {
        return {
          isLoggedIn: true,
        };
      }
  }

  return state;
}
