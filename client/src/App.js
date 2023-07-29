import './App.css';
import Navbar from './component/Navbar';

//importing components
import CrudApp from './component/CrudApp'
import AllUsers from './component/AllUsers';
import AddUser from './component/AddUser';

import {Route, Routes } from 'react-router-dom'; // must import
import EditUser from './component/EditUser';



function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<CrudApp/>}/>
        <Route path='/alluser' element={<AllUsers/>}/>
        <Route path='/adduser' element={<AddUser/>}/>
        <Route path='/edituser/:id' element={<EditUser/>}></Route> {/*  :id is variable where we will populate id of user*/}
      </Routes>
    </div>
  );
}

export default App;
