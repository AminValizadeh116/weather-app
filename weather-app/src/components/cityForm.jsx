import { useEffect, useState } from "react";
import { Link } from "react-router";

function CityForm() {
  const [optionValue, setOptionValue] = useState('select')
  const [wantedCity, setWantedCity] = useState({ data: "" });
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/cities").then((response) =>
      response.json().then((result) => setCities(result))
    );
  }, []);

  const handleCityValue = (event) => {
    setOptionValue(event.target.value)
    setWantedCity(JSON.parse(event.target.value).id);
  };

  console.log(optionValue)

  return (
    <>
      <label htmlFor="city" className="text-xl mr-50 mb-10 block">
        شهر خود را انتخاب کنید:
      </label>
      <select
        className="mr-50 border border-b-gray-500 rounded-lg px-3 py-1 text-gray-600"
        id="city"
        onChange={handleCityValue}
      >
        <option value="select" className="font-bold text-gray-600">
          
          شهر مورد نظر خود را انتخاب کنید
        </option>
        {cities.map((city) => (
          <option
            className="text-sm"
            value={JSON.stringify(city)}
            key={city.id}
          >
            {city.name}
          </option>
        ))}
      </select>

      { optionValue != "select" ? (
        <div className="mr-50 pt-5">
          <Link
            className=" bg-blue-800 text-white border rounded-md px-10 py-1 hover:text-blue-800 hover:bg-white hover:border-blue-800 transition"
            to={`/info/${wantedCity}`}
          >
            بررسی شهر
          </Link>
        </div>
      ) : (
        <div className="mr-50 pt-5">
          <span className=" bg-gray-200 border border-gray-800 rounded-sm py-1 px-7">
            بررسی شهر
          </span>
        </div>
      )}
    </>
  );
}

export default CityForm;
