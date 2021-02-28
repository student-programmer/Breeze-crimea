import React from 'react';
import './Time.css';

const Time = ({ time}) => {
  const [activeTime, setActiveTime] = React.useState(null);
  const onSelectTime = (time) => {
    setActiveTime(time);
  };
  return (
    <div>
      <ul className="time-control">
        {time && 
        time.map((time, ond) => (
          <li
            className={activeTime === time ? 'actives' : ''}
            onClick={() => onSelectTime(time)}
            key={`${time}_${ond}`}
          >
            {time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Time;
