const reducer = (state, action) => {
   switch (action.type) {
      case "SET_LOADING":
         return {
            ...state,
            isLoading: !state.isLoading,
         };
      case "SET_COUNTRIES":
         return {
            ...state,
            country: action.payload.results,
         };
      case "SET_STATES":
         return {
            ...state,
            states: action.payload.results,
         };
      case "SET_CITY":
         return {
            ...state,
            city: action.payload.results,
         };
   }
   return state;
};

export default reducer;
