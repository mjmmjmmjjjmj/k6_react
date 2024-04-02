import { useState, useEffect, useRef } from 'react';
import GGCard from './GGCard'

export default function Festival() {
    //부산축제 전체 데이터
    const [tdata, setTdata] = useState();
    const [guname, setGuname] = useState();
    const[opTags, setOpTags] = useState();
    const[cardTags, setCardTags] = useState();
    
    //select 값
    const selRef = useRef();

    //카드 데이터
    const handleSelGu = () => {
      console.log(selRef.current.value)
      let tm = tdata.filter(item => item.GUGUN_NM === selRef.current.value)
                        .map(item => <GGCard key = {item.UC_SEQ}
                                                imgUrl = {item.MAIN_IMG_THUMB.replace('http://', 'https://')}
                                                title = {item.PLACE}
                                                ptitle = {item.SUBTITLE}
                                                ktag = {item.TRFC_INFO} />)
      setCardTags(tm);
      console.log(tm)
    }

    //실제 fetch
    const getData = (url) => {
        fetch(url)
        .then(resp => resp.json())
        .then(data => setTdata(data.getFestivalKr.item))
        .catch(err => console.log(err))
    }

    //부산축제 데이터 fetch
    useEffect(() => {
        let url = 'https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?';
        url = url + `serviceKey=${process.env.REACT_APP_APIKEY}`;
        url = url + `&pageNo=1&numOfRows=40&resultType=json`;

        console.log(url)
        getData(url) ;

    }, []);

    //구정보 만들기
    useEffect (()=> {
        if (!tdata) return;

        let tm = tdata.map(item => item.GUGUN_NM)
        // console.log("tm=", tm)
        tm = new Set(tm);
        tm = [...tm].sort();
        setGuname(tm);

        // console.log("tm", tm)
    }, [tdata])
    
    //구 데이터
    useEffect(() => {
        if (!guname) return;
        console.log(guname)

        let tm = guname.map(item => 
          <option value = {item} key = {item}> 
          {item}
          </option>
          )
          tm = new Set(tm);
          tm = [...tm].sort();
          setOpTags(tm);    

        // console.log(guname)
    }, [guname])

   
  return (
    <div className="w-full h-full flex flex-col 
                    justify-start items-center">
      <form className = 'w-3/5 mx-auto flex'>
        <label htmlFor="gu" 
                className = " justify-center w-1/3 block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                                지역 선택
        </label>
        <select id="gu" 
                onChange={handleSelGu}
                ref = {selRef}
                className="bg-gray-50 border border-gray-300 
                                text-gray-900 text-sm
                                focus:ring-blue-500 
                                focus:border-blue-500 block w-full p-2.5 
                                dark:bg-gray-700 dark:border-gray-600 
                                dark:placeholder-gray-400 dark:text-white 
                                dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option defaultValue>---구 선택---</option>
            {opTags}
        </select>
      </form>
      <div className='w-full grid 
                      grid-cols-1 
                      md:grid-cols-2
                      lg:grid-cols-3
                      gap-4'>
          {cardTags}
      </div>
    </div>
  )
}
