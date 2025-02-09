import * as actions from "./actionTypes";

const storedData = JSON.parse(localStorage.getItem("players")) || [];


export const initState = {
  PlayerData: [],
  Bench : [],
  AddData : storedData,
  
  
};


// console.log(initState);



const reducer = (state = initState,action) => {
  switch(action.type) {
    case actions.GET_PLAYER:
      return { ...state, PlayerData : action.payload.playingXI , Bench : action.payload.bench };

    case actions.ADD_PLAYER:
      const newUser = {...action.payload}
      const updatedAddData = [...state.AddData, newUser];
        // Save updated AddData to localStorage
        localStorage.setItem("players", JSON.stringify(updatedAddData));
        return { ...state, AddData: updatedAddData };
        
    case actions.DELETE_PLAYER : 
    return {...state, AddData: state.AddData.filter((_, i) => i !== action.payload),}
    default:
      return state;
  }
};

export default reducer;


