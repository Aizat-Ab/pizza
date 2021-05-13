import React from 'react';
import {useDispatch} from 'react-redux'; 
import {category} from '../../redux/actions/filter';

const Categories = () => {
  const dispatch = useDispatch();
  const list = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const  [click, setClick] = React.useState(0)

  const b = (index) => {
    setClick(index);
    dispatch(category(index))
  }
    return (
        <div className="categories">
              <ul>
                {list.map((item, index) => {
                    return <li onClick = { () => b(index)} className= {index === click ? 'active' : ''}>{item}</li>
                  })}
              </ul>
            </div>
    )
}

export default Categories
