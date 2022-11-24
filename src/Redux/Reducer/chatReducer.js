let defaultState = {
  chatDetail: [],
}; 

const  chatReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_QUESTION": {
      return {
        ...state,
        chatDetail: [...state.chatDetail,action.payload]
      };
    }
    default:
      return state;
  }
};

export default chatReducer