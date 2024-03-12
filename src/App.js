import MainHeader from './01/MainHeader';
import Hello from './01/Hello';
import './App.css';

function App() {

  return ( 
    //JSX 문법 사용
    //react component에서 return이 있어야 하는데 하나만 가능
    <> {/*프레그먼트 태그*/}
    <div className="App">
      <MainHeader />
      {/* <MainHeader /> */}
      <Hello />
      <Hello />
      <Hello />
    </div>
    <div>402호</div>
    </>
  );
}
//화살표 함수로 작성 가능
// const App = () => {
//   return ();
// } 무조건 return문 있어야 함
// export default 는 중괄호 없이
/* component : 우리가 쓰는 */
export default App;
