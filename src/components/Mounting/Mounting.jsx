import React from 'react';
import Application from './Application/Application';
import m from './Mounting.module.css';
import Time from './Time/Time';
const Mounting = (props) => {
  const newPostElement = React.createRef();
  const klick = () =>{
    alert("hello world")
  }
  return (
    <div className={m.wrapper}>
      <p className={m.text}>
        Выбирайте удобное время и дату на монтаж кондиционера, оставляйте номер
        телефона и комментарий, и наш специалист с Вами свяжется для утонения
        деталей. Имейте в виду что монтаж день в день не всегда возможен.
        Оставляя заявку на монтаж, вы информируйте нас о намерении заказать
        монтаж кондиционера в все обязательства наступают после согласования с
        Вами всех деталей нашим специалистом. Заявки обрабатываются в рабочее
        время, с Понедельника по Пятницу. Установка кондиционеров в любые дни.
      </p>
      <div>
        <form>
          <div>
            <textarea   placeholder="Введите ваше имя:" cols="30" rows="1" ref={newPostElement}></textarea>
          </div>
          <div>
            <button onClick={klick}>Добавить заявку</button>
          </div>
          <Time onClick={(time) => console.log(time)} time={[
            "13:00",
            "17:00",
            "12:00",
            "14:50",
            "18:20",
          ]}/>
          
        </form>
      </div>
    </div>
  );
};
export default Mounting;
