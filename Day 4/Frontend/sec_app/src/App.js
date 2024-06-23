
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Data from './components/Data';

import ViewEm from './components/ViewEm';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Data data={{ename:"",eage:"",eposition:"",esalary:""}} method="post"/>}/>
        
        <Route path='/vw' element={<ViewEm/>}/>

        
      </Routes>


    </div>
  );
}

export default App;
