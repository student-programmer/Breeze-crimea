import React from 'react';
import { NavLink } from 'react-router-dom';
import home from './Home.module.css';
import arrow from "./../../asseds/images/expand-button.png"
const Home = () => {
  return (
    <div className={home.wrapper}>
      <div>
        <h1 className={home.what}>Что входит в установку в один этап?</h1>
        <div className={home.infohead}>
        <ul className={home.infoheadUl}>
          <li className={home.info}>
            {' '}
            1. Установка наружного блока на кронштейны под окно
          </li>
          <li className={home.info}>2. Установка внутреннего блока</li>
          <li className={home.info}>
            {' '}
           3. Пробитие одного отверстия под коммуникации (диаметр не более 45мм)
          </li>
          <li className={home.info}>
            {' '}
            4. Прокладка фреоновой трассы между блоками до 5 м
          </li>
          <li className={home.info}>
            {' '}
           5. Вывод дренажного шланга к наружному блоку до 5 м
          </li>
          <li className={home.info}>6. Прокладка межблочного кабеля до 6м</li>
          <li className={home.info}>7. Кабель питания до 3м</li>
          <li className={home.info}>8. Декоротивный короб 60х60 до 1м</li>
          <li className={home.info}>9. Декоротивный короб 10х25 до 2м</li>
          <li className={home.info}>10. Сетевая вилка</li>
          <li className={home.info}>11. Пуско-наладочные работы</li>
        </ul>
        </div>
      </div>
      <div className={home.arrow}>
        <img src={arrow} alt="arrow" />
      </div>
      <div className={home.abautUs}>
          <h1 className={home.someUs}>Коротко о нас</h1>
        <p className={home.descriptionAboutUs}>
          Наша компания "breeze-crimea" предоставляет услуги в сфере
          кондиционирования. У нас большой выбор бытовых и полупромышленных
          кондиционеров с привлекательными ценами. С 2014 года мы активно
          устанавливаем бытовые и полупромышленные кондиционеры (Сплит системы)
          в квартирах, частный домах, офисах, на предприятиях, в магазинах и
          т.д. Также занимаемся прокладкой трасс и обслуживанием кондиционеров
         в Крыму.
         </p>
         <p className={home.descriptionAboutUs2}>
            Если вы надумали
          переехать, почему бы не взять с собой свой кондиционер. Мы производим
          демонтаж кондиционеров с сохранением фреона, при дальнейшей установки
          кондиционера заправка фреоном не потребуется. Плохо дует кондиционер,
          ощущение что во внутреннем блоке падают сосульки, потекла грязная вода
          по стене, перестал холодить кондиционер и не только? Тогда Вам точно к
          нам. Мы занимаемся техническим обслуживанием и чисткой кондиционеров.
          В процессе эксплуатации в кондиционере могут образоваться бактерии и
          не приятный запах. </p>
          <p className={home.descriptionAboutUs3}>  Мы рекомендуем раз в год заказывать услугу
          техническое обслуживание. В нее входит антибактериальная чистка под
          высоким давлением внутреннего блока, чистка турбины, чистка уличного
          (наружного) блока, проверка дренажной системы и дозаправка фреоном
          если потребуется. Не знаете куда лучше установить кондиционер,
          позвоните или пришлите тз нам на почту, наш специалист свяжется с вами
          и проконсультирует.
          </p> 
          <p className={home.descriptionAboutUs4}>Опыт наших специалистов от 3 лет. </p> 
        
      </div>
      <div>
        <div className={home.link}>
          <NavLink className={home.leter}to="/mounting">Оставить заявку</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
