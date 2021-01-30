import React from 'react';
import h from './Home.module.css';
import AirBlock from './AirBlock/AirBlock';
const Home = ({items}) => {
  return (
    <div className={h.home}>
      <div>
        {
          items.map(obj => <AirBlock imageUrl={obj.imageUrl} key={obj.id} price={obj.price}name={obj.name} items={items}/>)
        }
       
      </div>
    </div>
  );
};
export default Home;
