import { useEffect, useState } from "react";
import { Link } from "react-router";

function CityForm() {
  const [wantedCity, setWantedCity] = useState({ data: "" });
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/cities").then((response) =>
      response.json().then((result) => setCities(result))
    );
  }, []);

  const handleCityValue = (event) => {
    setWantedCity(JSON.parse(event.target.value).id)
  }

  return (
    <>
      <label htmlFor="city">شهر خود را انتخاب کنید</label>
      <select id="city" onChange={handleCityValue}>
        {cities.map((city) => (
          <option value={JSON.stringify(city)} key={city.id}>
            {city.name}
          </option>
        ))}
      </select>

      <Link to={`/info/${wantedCity}`}> بررسی شهر </Link>
    </>
  );
}

export default CityForm;
