import React from 'react'
import './App.css';

const WeatherCard = ({ props, ondelete, unit }) => {
    function kelvinToCelsius(kelvin) {
        return kelvin - 273.15;;
    }
    function kelvinToFahrenheit(kelvin) {
        return (kelvin - 273.15) * 9 / 5 + 32;
    }

    var city = props.name;
    var temp = "";
    if (unit == 'celsius') {
        temp = kelvinToCelsius(props.main.temp).toFixed(1);
    } else if (unit == 'farenheit') {
        temp = kelvinToFahrenheit(props.main.temp).toFixed(1);
    }
    else {
        temp = (props.main.temp).toFixed(1);
    }
    var icon = props.weather[0].icon;

    const hadnledelete = () => {
        ondelete(city);
    }

    return (
        <div className="citydata">
            <p className="icondiv">{city}<span><img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} /></span></p>
            <p>{temp}</p>
            <button onClick={hadnledelete}>Delete</button>
        </div>
    )
}

export default WeatherCard