
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './Dashboard/List';
import Header from './Dashboard/Header';
import Add from './Dashboard/Add';


function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element= { <List />}></Route>
      <Route path='/employees' element= { <List />}></Route>
      <Route path='/add-employee' element= { <Add />}></Route>
      <Route path='/edit-employee/:e_id' element= { <Add />}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
    
  );
}

export default App;
