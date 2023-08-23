const reducer = (state, action) => {
   switch (action.type) {
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
      case "SET_USER":
         return{
            ...state,
            user:action.payload.results.user,
            login_time: action.payload.results.login_time
         };
      case "SET_PRODUCT":
         return{
            ...state,
            products: action.payload.results
         }
      case "SET_MINMAX":
         return{
            ...state,
            minPrice: action.payload.results.min,
            maxPrice: action.payload.results.max
         }
   }

   return state;
};

export default reducer;
