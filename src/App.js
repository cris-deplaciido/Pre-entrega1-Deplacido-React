import './style.css';
import NavBar from './componentes/NavBar/NavBar';
import ContainerCardItems from './componentes/ContainerCardItems/ContainerCardItems';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
          <NavBar />
          <Routes>
          <Route path='/' element={ <ContainerCardItems />} />
          <Route path='/item/:id' element={ <ContainerCardItems />} />
          <Route path='/category/:idCategory' element={ <ContainerCardItems />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;