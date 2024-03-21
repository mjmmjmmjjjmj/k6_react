import { useEffect, useState } from "react";

export default function MyClockTime() {
    const [ currentTime , setCurrentTime ] = useState(new Date)
    // const[tm, setTm] = useState(0) ; 
    

    //컴포넌트 생성 시 최초 1번 실행
    useEffect(() => {
        const t = setInterval(() => {
            setCurrentTime(new Date);
        }, 1000) ;
        console.log("[]=>", currentTime)
        
        return () => { clearInterval(t) }
    
    }, []) ;

     

    //tm변수가 바뀔 때마다 실행
    useEffect(() => {
        console.log("[]=>", currentTime)
    }, [currentTime]);

    //렌더링이 일어날때마다 실행
    // useEffect(()=> {
    //     console.log("[]없는 경우 => ", currentTime)
    // })

    return (
        <h1 className="font-bold text-2xl">
            {currentTime && `현재시간: ${currentTime.toLocaleTimeString()}`}
            
        </h1>
    );
};