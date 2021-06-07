import React, {useState } from 'react';
// imort {useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import m from './Mounting.module.css';
// import Time from './Time/Time';
// import setMount from './../../Redux/Actions/mount';
import updateMount from './../../Redux/Actions/mount';
import {setStatus} from './../../Redux/Actions/mount';
import { clearCart } from '../../Redux/Actions/cart';

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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);
  const addedCondinting = Object.keys(items).map((key) => {
    return items[key].items[0];
  });
  const category = addedCondinting.map(item =>{
    return item.category;
  })
 
  const dispatch = useDispatch();
  const onChangeHandlerName = (event) => {
    setName(event.target.value);

  };
  const onChangeHandlerEmail = (event) => {
    setEmail(event.target.value)
   
  };
  const onChangeHandlerPhone = (event) => {
    setPhone(event.target.value);
    
  };
  const onChangeHandlerDescription= (event) => {
    setDescription(event.target.value);
    
  };
  
  // const handleStatus = (bool) =>{
  //   dispatch(setStatus(bool))
  //  }

  //  const onClickHandleStatus = () =>{
  //    const bool = true;
  //    handleStatus(bool)
  //  }
  const sendForm = (event) => {
    event.preventDefault();
    setPhone(value);
    setEmail(value);
    setName(value);
    setDescription(value)
    fetch('http://localhost:5000/nodemail/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone, description, totalPrice, totalCount, category }),
    })
      .then((response) => response.json())
      .then((result) => alert(result.response.msg))
      dispatch(clearCart());
  };

//   const dispatch = useDispatch();
// const status = useSelector(({mounting}) => {
//   return{
//     status: mounting.status
//   }
// })

const value = useSelector(({mounting}) => mounting.updateMount)


  // const newPostElement = React.createRef();
  // React.useEffect(() => {
  //   dispatch(setMount(newPostElement.current));
  // }, []);
  // const value = useSelector(({ mounting }) => {
  //   return {
  //     value: mounting.value,
  //   };
  // });
  return ( 
    <div className={m.wrapper}>
    
      <form onSubmit={sendForm} className={m.mountForm}>
        <legend className={m.put}>Оставьте заявку на работу</legend>
        <div className={m.formGroup}>
          <input
            type="text"
            onChange={onChangeHandlerName}
            className={m.formControl1}
            value={name}
            id=""
            name="name"
            placeholder="Введите ваше имя"
          />
        </div>
        <div className={m.formGroup}>
          <input
            onChange={onChangeHandlerPhone}
            type="text"
            className={m.formControl2}
            value={phone}
            id=""
            name="phone"
            placeholder="Введите номер телефона"
          />
        </div>

        <div className={m.formGroup}>
          <input
            onChange={onChangeHandlerEmail}
            type="text"
            className={m.formControl3}
            value={email}
            id=""
            name="email"
            placeholder="Введите email"
          />
        </div>
        <div className={m.formGroup}>
          <textarea  className={m.formControl4} onChange={onChangeHandlerDescription} name="description" placeholder="Комментарий..." value={description} id="" cols="30" rows="3"></textarea>
        </div>

        <button onClick={sendForm} type="button" className={m.formBtn}>
          Отправить форму
        </button>
      </form>
      <p className={m.text}>
        Выбирайте удобное время и дату на монтаж кондиционера, оставляйте номер
        телефона и комментарий, и наш специалист с Вами свяжется для утонения
        деталей. Имейте в виду что монтаж день в день не всегда возможен.
        Оставляя заявку на монтаж, вы информируйте нас о намерении заказать
        монтаж кондиционера в все обязательства наступают после согласования с
        Вами всех деталей нашим специалистом. Заявки обрабатываются в рабочее
        время, с Понедельника по Пятницу. Установка кондиционеров в любые дни.
      </p>
      {/* <Time
        onClick={(time) => console.log(time)}
        time={['13:00', '17:00', '12:00', '14:50', '18:20']}
      /> */}
    </div>

  );
};
export default Mounting;
