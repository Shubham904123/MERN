let defaultState = {
  chatDetail: [],
};

const chatReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_QUESTION": {
      return {
        ...state,
        chatDetail: [...state.chatDetail, action.payload],
      };
    }

    case "Remove_Item": {
      const index = state.chatDetail.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );
      console.log(index);
      let newBasket = [...state.chatDetail];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log(`cant remove product(id:${action.payload.id})`);
      }
      console.log(newBasket);

      return {
        ...state,
        chatDetail: newBasket,
      };
    }
    default:
      return state;
  }
};

export default chatReducer;
