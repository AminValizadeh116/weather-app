import { useCallback, useEffect, useState } from "react";

function GetCityWeather(props) {
  const [cityWeatherInfo, setCityWeatherInfo] = useState(
    {windSpeed: 0,
    temp: 0,
    desciription: "",}
  );

  useEffect(() => {
        fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${50}&lon=${39}&appid=1b8d635a50039f3f09175d1be5555943`
    ).then((response) =>
      response.json().then((result) => {
        setCityWeatherInfo(
            {
          windSpeed: result.wind.speed,
          temp: result.main.temp,
          desciription: result.weather[0].description,
        }
    );
      })
    ); 
  }, [props]);

  return (
    <>
      <p>mmad</p>
      <h4>دما: {cityWeatherInfo.temp}</h4>
      <h4>شرح وضعیت هوا: {cityWeatherInfo.desciription}</h4>
      <h4>سرعت وزش باد: {cityWeatherInfo.windSpeed}</h4>
      
    </>
  );
}

export default GetCityWeather;
