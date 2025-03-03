import { useParams } from "react-router";
import CityForm from "../../components/form/cityForm";
import { useEffect, useRef, useState } from "react";
import { use } from "react";
import GetCityWeather from "../../components/form/GetCityWeather";

function Info() {
  const [city, setCity] = useState('');
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/cities/${params.id}`).then((response) =>
      response.json().then((result) => {
        setCity(result);
      })
    );
  }, []);

  return (
    <>
      <h1>info page</h1>
      {city? (<GetCityWeather city={city}/>): (
        <p>waiting</p>
      )}
      <h4>شهر: {city.name}</h4>
    </>
  );
}

export default Info;
