import React from 'react';
import Categories from '../Categories';
import PizzaBlock from '../PizzaBlock';
import Sort from '../Sort';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Home = () => {
  const [pizzas, setPizzas] = React.useState([]);

  const category = useSelector((state) => state.filter.category) 

  React.useEffect(async()=>{
    const responce = await axios.get('http://localhost:3005/pizzas');
    setPizzas(responce.data);
  },[]);

    return (
        <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories/>
            <Sort/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.filter((item)=>{
              if (item.category === category){
                return item;
              }
            })
             .map((pizza)=>{
               return <PizzaBlock pizza={pizza} key={pizza.id}/>
             })}
          </div>
        </div>
      </div>
    )
}

export default Home;
