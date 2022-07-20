import { DELETE_DAILY, SELECT_DAILY, LOAD_DAILIES } from "./Actions";

const DailiesReducer = (
  state = {
    dailies: [],
    finishedDailies: [],
  },
  action
) => {
  const {type, newlySelectedDailyId, dailiesFromPads} = action;
  const {dailies, finishedDailies } = state;
  const allDailies = [...dailies, ...finishedDailies]
  const newPercentageCompleted = parseInt((finishedDailies.length/allDailies.length)*100); 
  
  switch (type) {
    case LOAD_DAILIES:
      return {
        dailies: dailiesFromPads,
        finishedDailies: finishedDailies,
        percentageCompleted: newPercentageCompleted
      }
    case DELETE_DAILY:
      const dailyToDelete = dailies.find((daily) => daily._id === newlySelectedDailyId);
      return {
        dailies: dailies.filter((daily) => daily._id !== newlySelectedDailyId),
        finishedDailies: [ ...finishedDailies, dailyToDelete],
        percentageCompleted: parseInt(((finishedDailies.length+1)/allDailies.length)*100) 
      }
  }

  return state;
};

export default DailiesReducer;
