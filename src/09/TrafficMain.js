import { useState, useEffect } from "react"
import TrafficNav from "./TrafficNav";

export default function TrafficMain() {
    
    const [tdata, setTdata] = useState(); //전체 fetch데이터(17개 배열)
    
    const [c1, setC1] = useState();       //대분류 중복제거
    const [selC1, setSelC1] = useState(); //선택된 대분류
    
    const [c2, setC2] = useState();       //중분류 중복제거
    const [selC2, setSelC2] = useState(); //선택된 중분류
    
    const [detail, setDetail] = useState(); //선택된 중분류
    const [info, setInfo] = useState(); //선택된 중분류

    //useState 쓸 때 : 변수랑 변수를 저장하는/세팅하는 함수를 반환(리턴)해줌
    //const []로 써야 함 이 배열에 저장시킬 때 변경함수인 setTdata로 지정해줘야 함.
    const getDataFetch = (url) => {
        fetch(url)
        .then(resp => resp.json())
        // .then(data => console.log(data.data))
        .then(data => setTdata(data.data))
        //setTdata가 끝나서 데이터[tdata]가 변경이 되면 (getData 하단 useEffect로 이어짐)
        .catch(err => console.log(err))
    }
    // -------------------------------
    useEffect(()=> {
        let url = `https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?`
        url = `${url}page=1&perPage=20&`
        url = `${url}serviceKey=${process.env.REACT_APP_APIKEY}`;

        console.log(url)

        getDataFetch(url) ;
    }, [])

    // -----------------------------
    useEffect(()=> {
      if (!tdata) return;

      let tm = tdata.map(item => item.사고유형_대분류);
      tm = new Set(tm);
      tm = [...tm] ;
      console.log("tdata tm =>", tm)

      setC1(tm);
      // console. log(tdata)
    // .then 에서 이어짐 useEffect가 자동으로 {}안의 함수를 작동시킴
    
    }, [tdata]);

    // -----------------------
    
    useEffect (()=> {
      console.log("selc1", selC1) ;
      if(!tdata) return;
      let tm = tdata.filter(item => item.사고유형_대분류 === selC1) 
                    .map(item => item.사고유형_중분류)
      setC2 (tm);
      setInfo('');

    }, [selC1])
// ----------------------
    useEffect (()=> {
      // console.log("selc2", selC2) ;
      if(!tdata) return;
      let tm = tdata.filter(item => item.사고유형_대분류 === selC1 && 
                                    item.사고유형_중분류 === selC2) 
      setDetail (tm[0])                  
    }, [selC2]);

    useEffect(()=> {
      if(!tdata) return;
      console.log("detail=>", detail)
      const keyArr = ['사고건수', '사망자수', '중상자수', '경상자수', '부상신고자수'];

      let tm = keyArr.map( k => 
        <div className="w-full flex justify-center items-center"
              key = {k}>
          <div className="w-1/2 h-10 
                          font-bold
                          flex justify-ecenter items-center 
                          bg-slate-100">
            {k}
          </div>
          <div>{parseInt(detail[k]).toLocaleString()}</div>
          </div>
        );
        setInfo(tm)
    }, [detail])
// ----------------------
  return (
    <div className="w-full h-full 
                    m-10
                    flex flex-col
                    justify-start items-start">
      {c1 && <TrafficNav title  = '대분류'
                  category = {c1}
                  sel = {selC1}
                  setSel = {setSelC1}/>
      }
      {c2 && <TrafficNav title  = '중분류'
                  category = {c2}
                  sel = {selC2}
                  setSel = {setSelC2}/>
      }
      <div className="w-11/12 grid grid-cols-2
                              sm:grid-cols-3
                              md:grid-cols-5
                              gap-4">
      {info}
      </div>
    </div>
  )
}
