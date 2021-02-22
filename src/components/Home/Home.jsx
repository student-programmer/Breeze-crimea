import React from 'react'
import home from './Home.module.css'
const Home = () => {
    return (
        <div className= {home.wrapper}>
            <div>
                <h1 className={home.what}>Что входит в установку в один этап?</h1>
                <ul>
                <li className={home.info}> Установка наружного блока на кронштейны под окно</li>
                <li className={home.info}> Установка внутреннего блока</li>
                <li className={home.info}> Пробитие одного отверстия под коммуникации (диаметр не более 45мм)</li>
                <li className={home.info}> Прокладка фреоновой трассы между блоками до 5 м</li>
                <li className={home.info}> Вывод дренажного шланга к наружному блоку до 5 м</li>
                <li className={home.info}> Прокладка межблочного кабеля до 6м</li>
                <li className={home.info}> Кабель питания до 3м</li>
                <li className={home.info}>Декоротивный короб 60х60 до 1м</li>
                <li className={home.info}>Декоротивный короб 10х25 до 2м</li>
                <li className={home.info}> Сетевая вилка</li>
                <li className={home.info}>Пуско-наладочные работы</li>
                </ul>
            </div>
           
        </div>
    )
}


export default Home
