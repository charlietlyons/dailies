import { ADJUST_DAILIES, DELETE_DAILY, SELECT_DAILY } from "./Actions";

const DailiesReducer = (
  state = {
    dailies: [
      { title: "Budget" },
      { title: "Journal" },
      { title: "Email" },
      { title: "Exercise" }
    ],
    selected: { title: "Budget" },
    offset: 0
  },
  action
) => {
  const {dailies} = state;
  switch(action.type) {
    case SELECT_DAILY:
      const newSelected = dailies.find(daily => daily.title === action.selected.title)

      return {
        dailies,
        selected: newSelected,
        offset: (dailies.indexOf(newSelected) / dailies.length) * 100
      }
    case DELETE_DAILY:
      const dailyToShiftTo = dailies[dailies.findIndex(daily => action.selected.title === daily.title) + 1];
      const filteredDailies = dailies.filter(daily => daily.title !== action.selected.title);

      return {
        dailies: filteredDailies,
        selected: dailyToShiftTo,
        offset: (dailies.indexOf(dailyToShiftTo) / filteredDailies.length) * 100
      }
  }

  return state;
};

export default DailiesReducer;
