
export const SeasonReducer = (state, action) => {
  switch (action.type) {
    case 'CHOOSE_SEASON':
      return action.isSummer;
    default:
      return state;
  }
} 

export const userDestinations = (state, action) => {
  switch (action.type) {
    case 'SELECTED_DESTINATIONS':
      return {destinations:action.destinations};
    default:
      return state;
  }
} 
