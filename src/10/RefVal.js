import Tailbutton2 from "../UI2/Tailbutton2"
import { useState, useEffect, useRef } from "react";

export default function RefVal() {

let cnt = 0;                                //컴포넌트 변수
const [stCnt, setStCnt] = useState(0);         //state 변수
const refCnt = useRef(0);                   //Ref 변수

const handleLocal = () => {
    cnt = cnt+1;
    console.log('cnt = ', cnt);
}

const handleState = () => {
    setStCnt(stCnt + 1);
    
}

const handleRef = () => {
    refCnt.current = refCnt.current +1;
    console.log("refCnt = ", refCnt.current);
    //매번 렌더링이 일어나지 않아도 되는 것들 : 화면에만 나타나도록 ref변수 씀
    //보통 폼태그의 값을 가지고 올 때 주로 쓰임.
}

useEffect (() => {
    console.log("stCnt = ", stCnt);
}, [stCnt])


  return (
    <div className="w-11/12 grid grid-cols-3
                    gap-4">
        <div>
            컴포넌트 변수(지역변수) :  {cnt}
        </div>
        <div>
            State 변수 : {stCnt}
        </div>
        <div>
            Ref 변수 : {refCnt.current} 
            {/* 그냥 쓰면 오류나서 뒤에 .current 써야함 */}
        </div>
        <div>
            <Tailbutton2 caption="컴포넌트 변수"
            color="blue"
            handleClick={handleLocal}/>
        </div>
        <div>
            <Tailbutton2 caption="State 변수"
            color="blue"
            handleClick={handleState}/>
        </div>
        <div>
            <Tailbutton2 caption="Ref 변수"
            color="blue"
            handleClick={handleRef}/>
        </div>
      
    </div>
  )
}
