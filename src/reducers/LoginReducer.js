import { LOGIN } from "./Actions";

export default function LoginReducer(
  state = {
    isLoggedIn: false,
  },
  action
) {
  const { type, user, password } = action;

  switch (type) {
    case LOGIN:
      if (user !== null && password !== null) {
        return {
          isLoggedIn: true,
        };
      }
  }

  return state;
}
