import { useEffect, useState } from "react"
import { Link } from "react-router"

function CityForm() {
    const [wantedCity, setWantedCity] = useState({})
    const [cities, setCities] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/cities').then(response => response.json().then(result => setCities(result)))
    }, [])



    const selectCityValue = (e) => {
        setWantedCity(JSON.parse(e.target.value))
    }

    console.log(wantedCity)


    const handleChangeCity = () => {

    }

    return(
        <>
        <label htmlFor="city">شهر خود را انتخاب کنید</label>
        <select id="city" onChange={selectCityValue}>
        {cities.map(city => (
            <option value={JSON.stringify(city)} key={city.id}>{city.name}</option>
        ))}
        </select>

        <Link to='/info'><button onClick={handleChangeCity}> بررسی شهر </button></Link>
        </>
    )
}

export default CityForm