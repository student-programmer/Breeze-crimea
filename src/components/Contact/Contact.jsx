import React from 'react';
import ElementContact from './ElementContact';
const Contact = () =>{
    return(
        <div className="wrapper">
            <ElementContact contacts={[
                "+79788281091",
                "+79782725124",
                "email - breezecrimea@gmail.com",
            ]}/>
            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2825.08378820745!2d34.08956661580682!3d44.92163157750234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40eade90f2162891%3A0xe53b7bfb3d312c30!2z0JPRgNCw0LbQtNCw0L3RgdC60LDRjyDRg9C7LiwgMTA5LCDQodC40LzRhNC10YDQvtC_0L7Qu9GM!5e0!3m2!1sru!2s!4v1615639725709!5m2!1sru!2s" width="600" height="450" style={{marginRight: 0 + 'em'}} allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
        
    )
}
export default Contact;

