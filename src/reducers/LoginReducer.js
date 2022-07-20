import { LOGIN, LOGOUT } from "./Actions";

export default function LoginReducer(
  state = {
    username: null,
    isLoggedIn: false,
  },
  action
) {
  const { type, user, status } = action;
  switch (type) {
    case LOGIN:
      return {
        isLoggedIn: status === "good",
        username: user
      };
    case LOGOUT:
      localStorage.removeItem("PADS_TOKEN")
      return {
        isLoggedIn: false,
        username: null
      }
  }

  return state;
}
