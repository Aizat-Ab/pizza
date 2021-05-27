const initialState = {
    items: {},
    pizzaItems: [],
  };
  
  const pizzas = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PIZZAS':
        return {
          ...state,
          pizzaItems: action.payload
        };
        case 'INCREMENT__COUNT': {
          const saveCounter = !state.items[action.payload] ? 
          1 : state.items[action.payload].count + 1;

          const newCounter = {
            ...state.items,
            [action.payload] : {
              count : saveCounter,
            }
          }
          return {
            ...state,
            items: newCounter,
          };
        }
          

      default:
        return state;
    }
  };
  
  export default pizzas;