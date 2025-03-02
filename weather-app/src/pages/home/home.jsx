import { useEffect, useState } from "react";
import CityForm from "../../components/form/cityForm";

function Home() {
//   const key = "1b8d635a50039f3f09175d1be5555943";
//   const [citiesList, setCitiesList] = useState({})
//   const [data, setData] = useState([]);
//   const [lat, setLat] = useState(35.69439);
//   const [lon, setLon] = useState(51.42151);



//   useEffect(() => {
//     fetch(
//       `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1b8d635a50039f3f09175d1be5555943`
//     ).then((response) => response.json().then((result) => console.log(result)));
//   }, []);

  // console.log(data)

  return (
    <div>
        <h1>home</h1>
        <CityForm />
    </div>
  )
}

export default Home;
