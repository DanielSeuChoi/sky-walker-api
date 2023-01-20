import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios";
function OnePlanet() {

    const { id } = useParams();
    const [planet, setPlanet] = useState(null);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(res => {
                console.log(res.data)
                setPlanet(res.data);
            })
            .catch(err => {
                console.log(err);
                console.log("These aren't the droids you're looking for");
            })
    }, [id])

    return (
        <div>
            {
                planet && (
                    <>
                        <div >
                            <h2>Planet Name: {planet.name}</h2>
                            <h5>Terrain: {planet.terrain}</h5>
                            <h5>Climate: {planet.climate}</h5>
                            <h5>Population: {planet.population}</h5>
                            <h5>Orbital Period: {planet.orbital_period}</h5>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default OnePlanet