import React from 'react'
import TailSelect from '../UI2/TailSelect'
import TailInput from '../UI2/TailInput'
import Tailbutton2 from '../UI2/Tailbutton2'
import getxy from '../14/getxy.json'

import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Frcst() {
  console.log(getxy)
  const ops = getxy.map(item => item['1단계']);

  const[x, setX] = useState();
  const[y, setY] = useState();
  const[dt, setDt] = useState();
  const[area, setArea] = useState();
  
  const dRef = useRef();
  const sRef = useRef();

  const handleDate = () => {
    setDt(dRef.current.value.replaceAll('-', ''))
    console.log(dRef.current.value)
  }

  const navigator = useNavigate();
  const handleFrcst = (loc) => {
    if ( dt === ''|| dt === undefined) {
      alert('날짜를 선택하세요.');
      dRef.current.focus();
      return;
    }
    if(area === ''|| area === undefined) {
      alert('지역을 선택하세요.');
      sRef.current.focus();
      return;
    }
    // navigator (`/${loc}/${dt}/${area}/${x}/${y}`)

    let gubun = '';
    if(loc ==='ultra') {gubun = '초단기예보';}
    else {gubun = '단기예보'};

    navigator(`/flist?dt=${dt}&area=${area}&x=${x}&y=${y}&gubun=${gubun}`)
  }

  const handleArea = () => {
    if (sRef.current.value === '' || sRef.current.value=== undefined)
    return;

    let tm = getxy.filter(item => item['1단계'] === sRef.current.value);
    setArea(sRef.current.value)
    setX(tm[0]["격자 X"]);
    setY(tm[0]["격자 Y"]);
  }


  useEffect(()=> {
    console.log(area, x, y)
  }, [area, x, y])

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
                    caption="초단기예보"
                    handleClick={ ()=>{handleFrcst('ultra')} }>
        </Tailbutton2>
        </div>
        <div>
        <Tailbutton2 color = "blue"
                      caption="단기예보"
                      handleClick= {()=>{handleFrcst('village')}}>
        </Tailbutton2>
      </div>
    </div>
  )
}
