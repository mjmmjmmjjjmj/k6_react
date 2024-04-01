import Tailbutton2 from "../UI2/Tailbutton2"
import {Link , useNavigate } from "react-router-dom" ;


export default function RouteNav() {
  const navigator = useNavigate();
  return (
    <div className='w-11/12 flex
                    justify-center items-center'>
      <ul className = 'w-11/12 flex ustify-between items-center'>
        <li className="px-4 py-2 m-2 rounded-md w-1/3
                      text-center
                      br-slate-200" >
        <Link to='/'>홈</Link>
        </li>
        <li className="px-4 py-2 m-2 rounded-md w-1/3
                      text-center
                      br-slate-200"> 
        <Link to='/page1/오렌지'>
        page1
        </Link>
        </li>
        <li className="px-4 py-2 m-2 rounded-md w-1/3
                      text-center
                      br-slate-200"> 
        <Link to='/page2?item1=커피&item2=쥬스'>page2
        </Link>
        </li>
      </ul> 
      <div className="w-11/12 flex
                      justify-between items-center">    
        <Tailbutton2 caption="홈"
                      color="blue"
                      handleClick={()=>{navigator("/")}}/>
        <Tailbutton2 caption="Page1"
                      color="blue"
                      handleClick={()=>{navigator("/page1/포도")}}/>
        <Tailbutton2 caption="Page2"
                      color="blue"
                      handleClick={()=>{navigator("/page2?item1=사과&item2=바나나")}}/>
    </div>
    </div>
  )
}
