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
        case 'DROP__COUNTER' : {
          return {
              ...state, 
              items : {},
              }
          }
        case 'REMOVE__COUNTER' : {
          const counters = {...state.items};
          delete counters[action.payload]
            return {
                ...state, 
                items : counters,
                }
            }
        case 'PIZZA__SIZES' : {
              
              return {
                    ...state,
                    items : {
                      ...state.items,
                      [action.payload.id] : {
                        count: action.payload.count,
                        size: action.payload.size,
                      }
                    },
                  }
                }  
          
      default:
        return state;
    }
  };
  
  export default pizzas;