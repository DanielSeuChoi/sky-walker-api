import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios";
function OnePerson() {

    const { id } = useParams();
    const [people, setPeople] = useState(null);
    // const [homeWorld, setHomeWorld] = useState();
    // try to call on homeworld 
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(res => {
                console.log(res.data)
                // setHomeWorld(res.data.homeworld) <-- Try to call on homeWorld fetch
                setPeople(res.data)
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <div>
            {
                // (people,homeWorld) <---- try to fetch homeWorld
                people && (
                    <>
                        <div>

                            <h2>Name: {people.name}</h2>
                            <h5>EyeColor: {people.eye_color}</h5>
                            <h5>HairColor: {people.hair_color}</h5>
                            <h5>Height: {people.height}</h5>
                            <h5>Birth Year: {people.birth_year}</h5>

                            {/* <h3>Home World: people.homeworld</h3> <----- Try to call on homeWorld */}
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default OnePerson