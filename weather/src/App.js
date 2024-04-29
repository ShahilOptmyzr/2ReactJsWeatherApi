import { useEffect, useState } from 'react';
import './App.css';
import WeatherCard from './WeatherCard';

function App() {
  const [city, setcity] = useState("");
  const [data, setdata] = useState([]);
  const [unit, setunit] = useState('kelvin');


  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=41ef2b9511e085d236913b5776da559a`);
      const resdata = await res.json();
      setdata([...data, resdata]);
      setcity('');
    } catch (error) {
      console.log(error)
    }
  }

  const handledelete = (city) => {
    const newdata = data.filter((obj) => {
      return city !== obj.name
    })
    setdata(newdata);
    console.log(city);
  }



  // const handleunit = (e) => {
  //   console.log(e.target.value);
  //   const option = e.target.value;
  //   const newdata = data.map((obj) => {
  //     if (option == 'celsius') {
  //       obj.main.temp.toFixed(1);
  //     }
  //   })
  // }

  return (
    <div className="App">
      <div id="error"></div>
      <form id="weatherform">
        <input type="text" id="city" value={city} onChange={(e) => setcity(e.target.value)} />
        <button id="add" onClick={handlesubmit}>Add</button>
        <select name="unit" id="unit" onChange={(e) => setunit(e.target.value)}>
          <option value="kelvin">Kelvin</option>
          <option value="celsius">Celsius</option>
          <option value="farenheit">Farenheit</option>
        </select>
      </form>

      <div id="data">
        {data == null ? undefined : data.map((obj) => {
          return <WeatherCard key={obj.id} props={obj} ondelete={handledelete} unit={unit} />
        })}
      </div>
    </div>
  );
}

export default App;
