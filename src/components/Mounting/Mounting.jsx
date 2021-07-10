import React from 'react';
import m from './Mounting.module.css';
import Text from './Text/Text';
import Form from './Form/Form';

const Mounting = () => {
 
  return ( 
    <div className={m.wrapper}>
      <Form/>
      <Text/>
    </div>

  );
};
export default Mounting;
