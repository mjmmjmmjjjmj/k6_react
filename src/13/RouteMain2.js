import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RouteNav from './RouteNav';
import RouteHome from './RouteHome'
import RoutePage1 from './RoutePage1'
import RoutePage2 from './RoutePage2'

export default function RouterMain() {
  return (
    <BrowserRouter>
    <div className='h-full flex flex-col
                    justify-start items-center'>
       <RouteNav />               
       <Routes>
        <Route path="/" element = {<RouteHome/>} />
        <Route path="/" element = {<RoutePage1/>} />
        <Route path="/" element = {<RoutePage2/>} />
      </Routes>
      </div> 
    </BrowserRouter>
  )
}
