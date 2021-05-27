const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const getTotalPrice = (arr) => {
    return arr.reduce((sum,obj)=> obj.price + sum, 0);
};
const _get = (obj, path) => {
    const [firstKey, ...keys] = path.split('.');
    return keys.reduce((val, key)=>{
        return val[key];
    }, obj[firstKey]);
}
const getTotalSum = (obj, path) => {
    return Object.values(obj).reduce((sum, obj)=>{
        const value = _get(obj, path);
        return sum + value;
    }, 0);
};

function cart (state = initialState, action) {
    switch(action.type){
        case 'ADD_TO_CART' : {
            
            const a = !state.items[action.payload.id] ? [action.payload] :
            [...state.items[action.payload.id].items, action.payload];
            
            const b = {
                ...state.items,
                [action.payload.id] : {
                    items : a,
                    totalPrice : getTotalPrice(a),
                }
            }
            const totalCount = getTotalSum(b, 'items.length')
            const totalPrice = getTotalSum(b, 'totalPrice')

            return {
                ...state, 
                items : b,
                totalCount,
                totalPrice,
            }
        }
        case 'PLUS_CART_ITEM' : {
            return {
                ...state, 
                items : {}
            }
        
        }
        default : {
            return state
        }
    }
}
export default cart;