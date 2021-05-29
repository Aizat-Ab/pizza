export const cartAdd = (pizza) => ({
    type: 'ADD_TO_CART',
    payload: pizza,
});

export const clearCart = (pizza) => ({
    type :  'CLEAR__CART',
    payload: pizza,
})

export const plusCart = (pizza) => ({
    type :  'PLUS__CART__ITEM',
    payload: pizza,
})

export const minusCart = (pizza) => ({
    type :  'MINUS__CART__ITEM',
    payload: pizza,
})

export const removeCart = (pizza) => ({
    type :  'REMOVE__CART__ITEM',
    payload: pizza,
})

