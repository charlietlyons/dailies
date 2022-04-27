import { DELETE_DAILY, SELECT_DAILY } from "./Actions";

const DailiesReducer = (
  state = {
    completedDailies: [],
    incompleteDailies: [
      { title: "Budget" },
      { title: "Journal" },
      { title: "Email" },
      { title: "Exercise" }
    ],
    selected: { title: "Budget" },
    offset: 0,
  },
  action
) => {
  const { incompleteDailies, completedDailies } = state;
  switch (action.type) {
    case SELECT_DAILY:
      const newSelected = incompleteDailies.find(
        (daily) => daily.title === action.selected.title
      );

      return {
        incompleteDailies,
        completedDailies,
        selected: newSelected,
        offset:
          (incompleteDailies.indexOf(newSelected) / incompleteDailies.length) *
          100,
      };
    case DELETE_DAILY:
      const dailyToShiftTo =
        incompleteDailies[
          incompleteDailies.findIndex(
            (daily) => action.selected.title === daily.title
          ) + 1
        ];
      const filteredDailies = incompleteDailies.filter(
        (daily) => daily.title !== action.selected.title
      );
      const newCompletedDailies = completedDailies.map(daily => daily);
      newCompletedDailies.push(action.selected);

      return {
        incompleteDailies: filteredDailies,
        completedDailies: newCompletedDailies,
        selected: dailyToShiftTo,
        offset:
          (incompleteDailies.indexOf(dailyToShiftTo) / filteredDailies.length) *
          100,
      };
  }

  return state;
};

export default DailiesReducer;
