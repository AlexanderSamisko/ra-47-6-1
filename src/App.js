import { useRef, useState } from 'react';
import './App.css';
import Watch from './Components/Watch';
import moment from "moment";

function App() {
  const city = useRef(null);
  const zone = useRef(null);
  const [watches, setWatches] = useState([]);
  let time = [moment().get('hour'), moment().get('minute'), moment().get('second')];

  const addWatch = (evt) => {
    evt.preventDefault();
    setWatches(
      [
        ...watches, {
          title: city.current.value,
          timeZone: zone.current.value
        }
      ]   
    )

    city.current.value = "";
    zone.current.value = "";
  }

  return (
    <div className="App">
      <div className="input-group">
          <label htmlFor='City'>Город</label>
          <input ref={city} name='City' id='City' />

          <label htmlFor='TimeZone'>Временная зона</label>
          <input ref={zone} name='TimeZone' id='TimeZone' />

          <button onClick={addWatch}> Добавить </button>
      </div>
      <div className="watch-layout">
        {
          watches.map(
            (item, index) => <Watch 
              initTime={time} 
              timeZone={item.timeZone} 
              title={item.title} 
              manageWatch={setWatches}
              watches={watches}
              key={index}
              />
          )
        }
      </div>
    </div>
  );
}

export default App;
