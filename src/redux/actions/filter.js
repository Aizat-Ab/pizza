export const category = (index) => ({
    type: 'SET_CATEGORY',
    payload: index,
});
export const cartAdd = (pizza) => ({
    type: 'ADD_TO_CART',
    payload: pizza,
});