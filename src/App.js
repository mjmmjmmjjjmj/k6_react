import MainHeader from './01/MainHeader';
import Hello from './01/Hello';
import HelloCss from './02/HelloCss';
import { LuHome } from "react-icons/lu";
import MyDiv1 from './03/03_1/MyDiv1';
// import MyList from './04/MyList';
import MyListMain from './04/MyListMain';

import './App.css';

function App() {

  return ( 
    //JSX 문법 사용
    //react component에서 return이 있어야 하는데 하나만 가능
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
                        text-xl front-bold text-blue-800
                        bg-slate-200'>
        <div>리액트실습</div>
        <div><LuHome /></div>

      </header>
      <main className='grow flex flex-col 
                      justify-center items-center'
                      >
        {/* <HelloCss /> */}
        {/* <MyDiv1 /> */}
        <MyListMain />

      </main>
      <footer className='flex justify-center items-center
                        h-20 bg-slate-800
                        text-base text-white'>
                          ⓒ 2024 Kim Min Jung. All right reserved.

      </footer>
      

    </div>
    </>
  );
}
//화살표 함수로 작성 가능
// const App '= () => {
//   return ();
// } 무조건 return문 있어야 함
// export default 는 중괄호 없이
/* component : 우리가 쓰는 */
export default App;
