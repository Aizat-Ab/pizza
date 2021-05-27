// import axios from 'axios';

// export const fetchPizzas = () => (dispatch) => {
//     axios.get('http://localhost:3005/pizzas').then(({data})=>{
//         dispatch(setPizzas(data));
//     });
// };

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
});

export const pizzaCount = (id) => ({
    type :  'INCREMENT__COUNT',
    payload: id,
})

