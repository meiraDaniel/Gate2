/**
 * 
 * @param {*} state 
 * @param {string} action 
 * 
 */
export const SeasonReducer = (state, action) => {
  switch (action.type) {
    case 'CHOOSE_SEASON':
      return action.isSummer;
    default:
      return state;
  }
} 
/**
 * 
 * @param {*} state 
 * @param {string} action 
 * 
 */
export const userDestinations = (state, action) => {
  switch (action.type) {
    case 'SELECTED_DESTINATIONS':
      return {destinations:action.destinations};
    default:
      return state;
  }
} 

export const getData = (state, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return {tours:action.tours};
    default:
      return state;
  }
} 

