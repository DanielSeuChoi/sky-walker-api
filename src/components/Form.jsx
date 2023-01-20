import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';


function Form() {
    const [homeState, setHomeState] = useState({
        resource: 'people',
        id: '',
    })
    // const [individual, setIndividual] = useState([]);
    // const [choice, setChoice] = useState("");
    // const [planet, setPlanet] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const { resource, id } = homeState;
        navigate(`/${resource}/${id}`);
        // if (choice.length === 0) {
        //     return;
        // };
        // const personItem = {
        //     number: individual,
        // };
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setHomeState({
            ...homeState,
            [name]: value,
        })
    }

    // const axiosIndividual = (e) => {
    //     e.preventDefault(e);
    //     axios.get("https://swapi.dev/api/people").then(res => {
    //         setIndividual(res.data.results.map(p => p.name))
    //         console.log(res)
    //     })

    // }
    return (
        <div class="card">
            <form onSubmit={handleSubmit}>
                <select onChange={handleChange} name="resource" id="resource" value={homeState.resource} >
                    <option value="people">people</option>
                    <option value="planets">planet</option>
                </select>
                <input className='form-control' type="number" name="id" id="id" onChange={handleChange} value={homeState.id} />
                <button type='submit' className='btn btn-success'>Search</button>
                {/* <div>
                    {individual.map((p, i) => (
                        <span key={i}>{p}</span>
                    ))
                </div> */}
            </form>
        </div>
    )
}

export default Form;