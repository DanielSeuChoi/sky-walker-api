import './App.css';
import People from './components/People';
import Planets from './components/Planets';
import OnePerson from './components/OnePerson';
import HomeIdx from './components/HomeIdx';
import OnePlanet from './components/OnePlanet';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="container">
      <h2>Search something!</h2>
      <Routes>
        <Route path="/" element={<HomeIdx />}>
          <Route path="planets/" element={<Planets />}>
            <Route path=":id" element={<OnePlanet />} />
          </Route>
          <Route path="people/" element={<People />} >
            <Route path=":id" element={<OnePerson />} />
          </Route>
        </Route>
      </Routes>


    </div>
  );
}

export default App;
