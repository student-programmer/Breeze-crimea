import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Application from './Application/Application';
import m from './Mounting.module.css';
import Time from './Time/Time';
import setMount from './../../Redux/Actions/mount';
const Mounting = () => {
  const dispatch = useDispatch();
  const newPostElement = React.createRef();
  React.useEffect(() => {
    dispatch(setMount(newPostElement.current));
  }, []);
  const klick = () => {};
  const { value } = useSelector(({ mounting }) => {
    return {
      value: mounting.value,
    };
  });

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
      <form action="mail.php" method="POST">
      <legend>Заголовок формы</legend>
          <div className={m.formGroup}> 
          <label for="">Введите ваше имя</label>
      				<input type="text" className={m.formControl} id="" name="user_name" placeholder="Например, Иван"/>
          </div>
          <div className={m.formGroup}>
      				<label for="">Введите номер телефона</label>
      				<input type="text" className={m.formControl} id="" name="user_phone" placeholder="+7 (999) 99 99 999"/>
      			</div>
      		
      			<div className={m.formGroup}>
      				<label for="">Введите email</label>
      				<input type="text" className={m.formControl} id="" name="user_email" placeholder="mail@mail.ru"/>
      			</div>
      		
      			<button type="submit" className={m.formBtn}>Отправить форму</button>
      			
      </form>
        <Time
          onClick={(time) => console.log(time)}
          time={['13:00', '17:00', '12:00', '14:50', '18:20']}
        />
      
    </div>
  );
};
export default Mounting;
