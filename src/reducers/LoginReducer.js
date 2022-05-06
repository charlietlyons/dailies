import { LOGIN } from "./Actions";

export default function LoginReducer(
  state = {
    isLoggedIn: false,
  },
  action
) {
  const { type, status } = action;
  switch (type) {
    case LOGIN:
      return {
        isLoggedIn: status === "good",
      };
  }

  return state;
}
