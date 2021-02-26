import React, { useRef, useState }from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from 'use-debounce';
import Application from './Application/Application';
import m from './Mounting.module.css';
import Time from './Time/Time';
import setMount from './../../Redux/Actions/mount';
const Mounting = () => {
  // const handleClick = (e) =>{
  //   e.preventDefault();

  //   if(e.target.id === "name"){
  //     setName(e.target.value)
  //   }else if(e.target.id === "email"){
  //     setEmail(e.target.value)
  //   }else{
  //     setPhone(e.target.value)
  //   }
  // }
//   const formDataToJson = (form) => {
//     const formData = new FormData(form);
//     let obj = {};

//     for(let [key, value] of formData.entries()){
//         obj[key] = value;
//     }

//     return JSON.stringify(obj);
// };
// fetch(url, {
//   method: 'POST,
//   headers:{
//     'Content-Type': 'application/json',
//   },
//  body: JSON.stringify(mail, name, phone)
// }).then(response => response.json())
//   .then(result => {
//     'тут код'..
//     например, alert(result.response.msg);
//   })

  // const [inputValue, setInputValue] = React.useState("");
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const onChangeHandlerName = event => {
    setName(event.target.value);
  };
  const onChangeHandlerEmail = event => {
      setEmail(event.target.value);
  };
  const onChangeHandlerPhone = event => {
    setPhone(event.target.value);
  };

  const sendForm = (event) =>{
      event.preventDefault();
     fetch("http://localhost:5000/form", {
      method:"POST",
      headers:{
            'Content-Type': 'application/json',
          },
      body:JSON.stringify({name, email, phone}),
    }).then((response) => (response.json())).then((result) => alert(result.response.msg))
  }
  const dispatch = useDispatch();
  const newPostElement = React.createRef();
  React.useEffect(() => {
    dispatch(setMount(newPostElement.current));
  }, []);
  const {value}  = useSelector(({ mounting }) => {
    return {
      value: mounting.value,
    };
  });
 const inputRef = useRef()
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
      <form onSubmit={sendForm} className={m.mountForm}>
      <legend>Заголовок формы</legend>
          <div className={m.formGroup}> 
          <label for="">Введите ваше имя</label>
      				<input ref={inputRef} type="text" onChange={onChangeHandlerName} className={m.formControl} value={name} id="" name="name" placeholder="Например, Иван"/>
          </div>
          <div className={m.formGroup}>
      				<label for="">Введите номер телефона</label>
      				<input ref={inputRef} onChange={onChangeHandlerPhone}  type="text" className={m.formControl} value={phone} id="" name="phone" placeholder="+7 (999) 99 99 999"/>
      			</div>
      		
      			<div className={m.formGroup}>
      				<label for="">Введите email</label>
      				<input ref={inputRef} onChange={onChangeHandlerEmail} type="text" className={m.formControl}  value={email} id="" name="email" placeholder="mail@mail.ru"/>
      			</div>
      	
      			<button onClick={sendForm} type="button" className={m.formBtn}>Отправить форму</button>
      			
      </form>
        <Time
          onClick={(time) => console.log(time)}
          time={['13:00', '17:00', '12:00', '14:50', '18:20']}
        />
      
    </div>
  );
};
export default Mounting;
