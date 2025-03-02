import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [lat, setLat] = useState(35.69439);
  const [lon, setLon] = useState(51.42151);
  const [city, setCity] = useState('tehran')

  useEffect(() => {
    fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1b8d635a50039f3f09175d1be5555943`
  ).then((response) => response.json().then((result) => setData(result)));

  }, [])
  
  console.log(data)

  return (
    <>

      <h2>hello</h2>
    </>
  );
}

export default App;
