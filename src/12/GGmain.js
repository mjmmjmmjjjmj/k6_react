import Tailbutton2 from '../UI2/Tailbutton2'
import TailInput from '../UI2/TailInput'
import { useEffect, useRef, useState } from 'react';
import GGCard from './GGCard'

export default function Gmain() {
  
  const[tdata, setTdata] = useState()
  const[tags, setTags] = useState()

  useEffect(()=> {
    if(!tdata) return;

    let tm = tdata.map((item)=> 
    <GGCard  key = {item.galContendId}
            imgUrl = {item.galWebImageUrl.replace('http://', 'https://')}
            Title = {item.galTitle}
            ptitle = {item.galPhotography}
            ktag = {item.galSearchKeyword} /> 
    );
    setTags(tm)
  }, [tdata])

  const keyword = useRef();
  const handleKeyword = () => {
    console.log(keyword.current.value)
  }

  const getData = (w) => {
    console.log(w)
    let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`;
    url = url + `serviceKey=${process.env.REACT_APP_APIKEY}`;
    url = url + `&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`;
    url = url + `&keyword=${w}&_type=json`;
    console.log(url)

    
    fetch (url)
    .then(resp => resp.json())
    .then(data => setTdata(data.response.body.items.item))
    .catch(err => console.log(err))
    
    
  }

  const handleFetch = () => {
    if(keyword.current.value == '') {
      alert("키워드를 입력하세요.") ;
      keyword.current.focus();
      return;
    }
    let w = encodeURI(keyword.current.value)
    console.log(w)
    getData(w);
    
  }
  const handleClear = () => {
    console.log(keyword.current.value)
  }


  return (
    <div className='w-11/12 flex flex-col
                    mt-5
                     justify-start items-center'>
      <div className='w-full grid grid-cols-1 md:grid-cols-3 
                      gap-4 bg-slate-200'>
        <div className='p-2'>
          <TailInput type = "selectbox"
                      inputRef = {keyword}
                      ph = "지역구 선택"
                      handleChange = {handleKeyword}/>
        </div>
      
        <div className='px-2'>
          <Tailbutton2 caption="조회"
                      color="blue"
                      handleClick={handleFetch}/>
        </div>
      
        <div className='px-2'>
          <Tailbutton2 caption="취소"
                      color="blue"
                      handleClick={handleClear}/>
        </div>
      </div>
      <div className='w-full grid 
                      grid-cols-1 
                      md:grid-cols-2
                      lg:grid-cols-3
                      gap-4'>
        {tags}
      </div>
    </div>
  )
}
