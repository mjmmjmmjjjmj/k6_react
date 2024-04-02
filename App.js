import MainHeader from './01/MainHeader';
import Hello from './01/Hello';
import HelloCss from './02/HelloCss';
import { FaHome } from "react-icons/fa";
import MyDiv1 from './03/03_1/MyDiv1';
// import MyList from './04/MyList';
import MyListMain from './04/MyListMain';
import './App.css';
import BoxOfficeTb from './05_1/BoxOfficeTb';
import Lotto2 from './06/Lotto2';
import FoodMain from './07/FoodMain'
import MyClock from './08/MyClock';
import TrafficMain from './09/TrafficMain';
import RefVal from './10/RefVal';
import RefInput from './10/RefInput';
import GCard from './11/GCard';
import Gmain from './11/Gmain';
import Festival from './12/Festival';
import Rmain from './13/Rmain';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Frcst from './14/Frcst';
import UltraFrcst from './14/UltraFrcst';
import VillageFrcst from './14/VillageFrcst';



function App() {

  return ( 
    //JSX 문법 사용
    //react component에서 return이 있어야 하는데 하나만 가능
    <BrowserRouter>
    <> {/*프레그먼트 태그*/}
    <div className="App"></div>
      {/* <MainHeader /> */}
      {/* <MainHeader /> */}
      {/* <Hello />
      <Hello />
      <Hello /> */}
      {/* <HelloCss /> */}
      <div className='flex flex-col 
      w-full max-w-screen-xl 
      h-screen 
      mx-auto
      overscroll-y-auto'>
      
      <header className='flex justify-between
                        h-20 p-10 
                        text-xl font-bold text-blue-800
                        bg-slate-200'>
        <div>리액트실습</div>
        <div className='flex justify-end items-center'>
          <div className='mx-5 p-2 rounded-md 
                        hover:bg-blue-900 hover:text-white'>
            <Link to='/lotto2'>로또</Link>
          </div>
          
          <div className='mx-5 p-2 rounded-md 
                        hover:bg-blue-900 hover:text-white'>
            <Link to='/food'>마켓</Link>
          </div>

          <div className='mx-5 p-2 rounded-md 
                        hover:bg-blue-900 hover:text-white'>
            <Link to='/box'>영화</Link>
          </div>
       
          <div className='mx-5 p-2 rounded-md 
                        hover:bg-blue-900 hover:text-white'>
            <Link to='/traffic'>교통</Link>
          </div>
          
          <div className='mx-5 p-2 rounded-md 
                        hover:bg-blue-900 hover:text-white'>
            <Link to='/festival'>축제</Link>
          </div>

          <div className='mx-5 p-2 rounded-md 
                        hover:bg-blue-900 hover:text-white'>
            <Link to='/frcst'>예보</Link>
          </div>
            

        <div className='text-2xl'> <Link to='/clockforHome' ><FaHome /></Link></div>
        </div>

      </header>
      <main className='grow flex flex-col 
                      justify-center items-center'
                      >
       <Routes >
        <Route path='/' element={<MyClock/>} />
        <Route path='/clockforHome' element={<MyClock/>} />
        <Route path='/lotto2' element={<Lotto2 />} />
        <Route path='/food' element={<FoodMain />} />
        <Route path='/box' element={<BoxOfficeTb />} />
        <Route path='/traffic' element={<TrafficMain />} />
        <Route path='/festival' element={<Festival />} />
        <Route path='/frcst' element={<Frcst />} />
        <Route path='/ultra/:dt/:area/:x/:y' element={<UltraFrcst />} />
        <Route path='/village/:dt/:area/:x/:y' element={<VillageFrcst />} />
        {/* <Route path='/' element={<Lotto2/>}> */}
        {/* <HelloCss /> */}
        {/* <Hello/> */}
        {/* <MyDiv1 /> */}
        {/* <MyListMain /> */}
        {/* <Lotto2 /> */}
        {/* <FoodMain />/ */}
        {/* <MyClock /> */}
        {/* <TrafficMain /> */}
        {/* <RefVal /> */}
        {/* <BoxOfficeTb /> */}
        {/* <GCard/> */}
        {/* <Gmain/> */}
        {/* <Festival />/ */}
        {/* <Rmain/> */}
        
      </Routes>
      </main>
      <footer className='flex justify-center items-center
                        h-20 bg-slate-800
                        text-base text-white'>
                          ⓒ 2024 Kim Min Jung. All right reserved.

      </footer>
      

    </div>
    </>
    </BrowserRouter>
  );
}
//화살표 함수로 작성 가능
// const App '= () => {
//   return ();
// } 무조건 return문 있어야 함
// export default 는 중괄호 없이
/* component : 우리가 쓰는 */
export default App;
