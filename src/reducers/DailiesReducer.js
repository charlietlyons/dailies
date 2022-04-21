import { DELETE_DAILY, SHIFT_DAILIES } from "./Actions";

const DailiesReducer = (
  state = {
    selected: { title: "Budget" },
    dailies: [
      { title: "Budget" },
      { title: "Journal" },
      { title: "Email" },
      { title: "Exercise" },
      { title: "Work" },
      { title: "Reading" },
      { title: "Computer Science" },
      { title: "One Thing" },
      { title: "Clean" },
      { title: "Night Before" },
    ],
  },
  action
) => {
  switch (action.type) {
    case DELETE_DAILY:
      const incrementAmount =
        action.title !== state.dailies[state.dailies.length - 1] ? 1 : -1;
      const newIndex =
        state.dailies.indexOf(
          state.dailies.find((daily) => daily.title === action.title)
        ) + incrementAmount;

      return {
        selected: state.dailies[newIndex],
        dailies: state.dailies.filter((daily) => daily.title !== action.title),
      };
    case SHIFT_DAILIES:
      return {
        selected: state.dailies.find((daily) => daily.title === action.title),
        dailies: state.dailies,
      };
    default:
      return state;
  }
};

export default DailiesReducer;
