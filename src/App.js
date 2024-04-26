import logo from './logo.svg';

import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { RecoilRoot } from "recoil"
import Home from './component/Home';
import Login from './component/Login';
import Nav from './component/Nav';
import Subway from './component/Subway';

function App() {
  return (
    <BrowserRouter>
    <RecoilRoot>
    <div className='w-full h-screen max-x-screen mx-auto'>
      <div>
        <Nav />
      </div>
      <div className='grow overflow-y-auto'>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/Subway" element = {<Subway/>}/>
    </Routes>
    </div>
    </div>
    </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
