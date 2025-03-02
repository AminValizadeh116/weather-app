import { useParams } from "react-router";
import CityForm from "../../components/form/cityForm";
import { useEffect, useRef, useState } from "react";
import { use } from "react";

function Info() {
  const [city, setCity] = useState({});
  const params = useParams();
  const [cityWeatherInfo, setCityWeatherInfo] = useState({
    windSpeed: 0,
    temp: 0,
    desciription: "",
  });

// const cityWeatherInfo = useRef({
//     windSpeed: 0,
//     temp: 0,
//     desciription: "",
//   })

  useEffect(() => {
    fetch(`http://localhost:8000/cities/${params.id}`).then((response) =>
      response.json().then((result) => {
        setCity(result);
      })
    );
  }, []);

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=1b8d635a50039f3f09175d1be5555943`
  ).then((response) =>
    response.json().then((result) => {
        // cityWeatherInfo.current = {
        //          windSpeed: result.wind.speed,
        //          temp: result.main.temp,
        //          desciription: result.weather[0].description
        //      }
        setCityWeatherInfo({
            windSpeed: result.wind.speed,
            temp: result.main.temp,
            desciription: result.weather[0].description
        })
    })
  );

//   const show = () => {
//     console.log(cityWeatherInfo.current);
//   }
  

  return (
    <>
      <h1>info page</h1>
      <h4>شهر: {city.name}</h4>
      <h4>دما: {cityWeatherInfo.temp}</h4>
      <h4>شرح وضعیت هوا: {cityWeatherInfo.desciription}</h4>
      <h4>سرعت وزش باد: {cityWeatherInfo.windSpeed}</h4>
    </>
  );
}

export default Info;
