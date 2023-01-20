import { Outlet } from 'react-router-dom';
import Form from './Form';

// const [homeState, setHomeState] = useState({
//     resource: 'people',
//     id: '',
// })
// const [individual, setIndividual] = useState([]);
// const [choice, setChoice] = useState("");
// // const [planet, setPlanet] = useState([]);
// const navigate = useNavigate();

// const handleSubmit = (e) => {
//     e.preventDefault();
//     const { resource, id } = homeState;
//     navigate(`/${resource}/${id}`);
//     // if (choice.length === 0) {
//     //     return;
//     // };
//     // const personItem = {
//     //     number: individual,
//     // };
// }
// const handleChange = (e) => {
//     const { name, value } = e.target;
//     setHomeState({
//         ...homeState,
//         [name]: value,
//     })
// }
// const getPerson = (e) => {
//     e.preventDefault(e);

// }

// const axiosIndividual = (e) => {
//     e.preventDefault(e);
//     axios.get("https://swapi.dev/api/people").then(res => {
//         setIndividual(res.data.results.map(p => p.name))
//         console.log(res)
//     })

// }

// const axiosPlanet = () => {
//     axios.get("https://swapi.dev/api/planets").then(res => {
//         setPlanet(res.data.results.map(p => p.name))
//         console.log(res)
//     })

// }
function HomeIdx() {

    return (
        <div className='container'>
            <Form />
            <Outlet />

        </div>
    )
}

export default HomeIdx

