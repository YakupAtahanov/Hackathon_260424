import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './layout/homePage/HomePage';
import UseDemo from './layout/usedemo/UseDemo';
import { observer } from 'mobx-react-lite';

const App = observer(() => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/usedemo' element={<UseDemo />}></Route>
            </Routes>
        </BrowserRouter>
    );
})

export default App;