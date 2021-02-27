import { useState } from "react"


const SortPopup = ({type, visiblePopup, onClickCategory, toggleVisiblePopup}) => {
    const [count, setCount] = useState(0);
   const onSetCount = () =>{
    setCount()
   }
    return (
        
        <div>
            <span onClick={toggleVisiblePopup}>По цене:</span>
              <ul>
        {visiblePopup &&
          type.map((type, cond) => (
            <li
              className={count === type ? 'actived' : ''}
              onClick={() => onClickCategory(type)}
              key={`${type}_${cond}`}
            >
              {type}
            </li>
          ))}
      </ul>
        </div>
    )
}

export default SortPopup
