const initial_state = {
   countries: [],
   states: [],
   cities: []
}


export const fetchCountryReducer = (state=initial_state, action) =>{
   switch(action.type){
      case "SET_COUNTRY":
         return {...state, countries:action.payload}
      case "SET_STATE":
         return {...state, states:action.payload}
      case "SET_CITY":
         return {...state, cities:action.payload}
      default:
         return state
   }

}