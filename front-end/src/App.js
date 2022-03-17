import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProcesosCPU } from './components/procesosCPU';
import { Logs } from './components/logs';
import { Navbar } from './components/navbar';
import { ConsumoRam } from './components/consumoRam';

function App() {
  let links = [
    { title: "Consumo de RAM", path:"/" },
    { title: "Procesos del CPU", path:"/CPUS" }, 
    { title: "Lista de Logs", path:"/LOGS" }
  ]

  console.log()
  return (
    <div className="App">
       <Router>
          <Navbar links = {links}/>
          <Routes>
            <Route exact path ='/' element={<ConsumoRam/>} />
            <Route exact path ='/CPUS' element = {<ProcesosCPU/>}/>
            <Route exact path ='/LOGS' element = {<Logs/>} />
          </Routes> 
        </Router>
    </div>
  );
}

export default App;
