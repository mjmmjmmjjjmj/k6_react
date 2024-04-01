import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RouteNav from './RouteNav';
import RouteHome from './RouteHome'
import RoutePage1 from './RoutePage1'
import RoutePage2 from './RoutePage2'

export default function Rmain() {
  return (
   <BrowserRouter>
        <RouteNav />
        <Routes>
            <Route path='/' element={<RouteHome />}/>
            <Route path="/page1/:item" element = {<RoutePage1/>} />
            <Route path="/page2" element = {<RoutePage2/>} />
        </Routes>
   </BrowserRouter>
  )
}
