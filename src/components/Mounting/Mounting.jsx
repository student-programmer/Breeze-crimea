import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import m from './Mounting.module.css';
import { clearCart } from '../../Redux/Actions/cart';

const Mounting = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [emailDirty, setEmailDirty] = useState(false)
  const [nameDirty, setNameDirty] = useState(false)
  const [phoneDirty, setPhoneDirty] = useState(false)
  const [nameError, setNameError] = useState("Имя не может быть пустым")
  const [emailError, setEmailError] = useState("email не может быть пустым")
  const [phoneError, setPhoneError] = useState("Телефон не может быть пустым")
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
    const re = /^([а-я]{1}[а-яё]{3,23}|[a-z]{1}[a-z]{3,23})$/;
    if (!re.test(String(event.target.value).toLowerCase())){
      setNameError("Некоректное имя")
    }else{
      setNameError("")
    }
  };
  const onChangeHandlerEmail = (event) => {
    setEmail(event.target.value)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(!re.test(String(event.target.value).toLowerCase())){
      setEmailError("Некоректный email")
    }else{
      setEmailError("")
    }
   
  };
  const onChangeHandlerPhone = (event) => {
    setPhone(event.target.value);
    const re = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;
    if (!re.test(String(event.target.value).toLowerCase())){
      setPhoneError("Некоректный номер телефона")
    }else{
      setPhoneError("")
    }
  };
  const onChangeHandlerDescription= (event) => {
    setDescription(event.target.value);
    
  };
  const [formValid, setFormValid] = useState(false)
  useEffect(() =>{
    if(emailError || phoneError || nameError){
      setFormValid(false)
    }else{
      setFormValid(true)
    }
  }, [emailError, phoneError, nameError])

  const sendForm = (event) => {
    event.preventDefault();
    setPhone(value);
    setEmail(value);
    setName(value);
    setDescription(value)
    fetch('https://breeze-crimea.ru:5000/nodemail/form', {
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


const value = useSelector(({mounting}) => mounting.updateMount)

const blurHandler = (e) =>{
  switch(e.target.name){
    case "name":
      setNameDirty(true)
      break
      case "phone":
        setPhoneDirty(true)
        break
        case "email":
          setEmailDirty(true)
          break
          default:
  }
}

  return ( 
    <div className={m.wrapper}>
    
      <form onSubmit={sendForm} className={m.mountForm}>
        <legend className={m.put}>Оставьте заявку на работу</legend>
        {(nameDirty && nameError) && <div className={m.error1}>{nameError}</div>}
        <div className={m.formGroup}>
          <input
            type="text"
            onChange={onChangeHandlerName}
            onBlur={e => blurHandler(e)}
            className={m.formControl1}
            value={name}
            id=""
            name="name"
            placeholder="Введите ваше имя"
          />
        </div>
        {(phoneDirty && phoneError) && <div className={m.error2}>{phoneError}</div>}
        <div className={m.formGroup}>
          <input
            onChange={onChangeHandlerPhone}
            onBlur={e => blurHandler(e)}
            type="text"
            className={m.formControl2}
            value={phone}
            id=""
            name="phone"
            placeholder="Введите номер телефона"
          />
        </div>
        {(emailDirty && emailError) && <div className={m.error3}>{emailError}</div>}
        <div className={m.formGroup}>
          <input
            onChange={onChangeHandlerEmail}
            onBlur={e => blurHandler(e)}
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

        <button disabled={!formValid}onClick={sendForm} type="button" className={m.formBtn}>
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
