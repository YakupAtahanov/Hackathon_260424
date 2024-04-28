import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './layout/homePage/HomePage';
import UseDemo from './layout/usedemo/UseDemo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/usedemo' element={<UseDemo />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;