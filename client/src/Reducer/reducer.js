
export const SeasonReducer = (state, action) => {
  switch (action.type) {
    case 'CHOOSE_SEASON':
      return action.isSummer;
    default:
      return state;
  }
} 