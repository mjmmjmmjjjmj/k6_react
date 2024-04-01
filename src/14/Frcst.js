import React from 'react'
import TailSelect from '../UI2/TailSelect'
import TailInput from '../UI2/TailInput'
import { useState, useEffect, useRef } from 'react'
import Tailbutton2 from '../UI2/Tailbutton2'
import getxy from '../14/getxy.json'

export default function Frcst() {
  console.log(getxy)
  const ops = getxy.map(item => item['1단계']);

  const[x, setX] = useState();
  const[y, setY] = useState();
  
  const dRef = useRef();
  const sRef = useRef();
  /////////////////////////
   //실제 fetch
   const getData = (url) => {
    fetch(url)
    .then(resp => resp.json())
    .then(data => setX(data.getxy))
    .then(data => setY(data.getxy))
    .catch(err => console.log(err))
}

//일기예보 데이터 fetch
useEffect(() => {
    let url = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?';
    url = url + `serviceKey=${process.env.REACT_APP_APIKEY}`;
    url = url + `&pageNo=1&numOfRows=1000&dataType=json`;

    console.log(url)
    getData(url) ;

}, []);
//////////////////
  const handleDate = () => {
    console.log(dRef.current.value)
  }
  const handleArea = () => {
    let tm = getxy.filter(item => item['1단계'] === sRef.current.value);

    setX(tm[0]["격자 X"]);
    setY(tm[0]["격자 Y"]);
  }

  useEffect(()=> {
    console.log(x, y)
  }, [x, y])


  return (
    <div className='w-11/12 justify-start grid grid-cols-1 md:grid-cols-2 gap-2'>
      <div>
        <TailInput type="date"
                  inputRef={dRef}
                  ph = "날짜선택"
                  handleChange={handleDate}/>
        </div>
        <div>
        <TailSelect ops = {ops}
                    opDefault="---지역선택---"
                    selRef = {sRef}
                    handleSel = {handleArea}/>
      </div>
      <div>
        <Tailbutton2 color = "blue"
                    caption="초단기예보">         
        </Tailbutton2>
        </div>
        <div>
        <Tailbutton2 color = "blue"
                      caption="단기예보">
        </Tailbutton2>
      </div>
    </div>
  )
}
