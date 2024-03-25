import BoxOfficeData from './BoxOffice.json'
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import BoxOfficeTbody from './BoxOfficeTbody';
import BoxOfficeThead from './BoxOfficeThead';
import BoxOfficeInfo from './BoxOfficeInfo';
import TailInput from '../UI2/TailInput';
import { useState, useEffect, useRef } from 'react';

export default function BoxOfficeTb() {
    //Ref 변수
    const boxRef = useRef();
    //State 변수
    const [boxList, setBoxList] = useState()
    const[trs, setTrs] = useState()

    const handleClick = (mv) => {
      console.log(mv)
      //할당연산자로 state 변수 변경 불가 => 업데이트 함수 변경
      
  }
      //state 변수
      const [selMv, setSelMv] = useState();
    useEffect(() => {
      if(!boxList) return;
      const trs = boxList.map(item =>
        <tr key = {item.movieCd} 
                    onClick={() => {handleClick(item)}}
                    className ='hover:font-bold hover:bg-blue-50 hover:cursor-pointer h-10'>
            <td className='text-center'>{item.rank}</td>
            <td className='text-left'>{item.movieNm}</td>
            <td className='text-right'>{parseInt(item.salesAmt).toLocaleString()}원</td>
            <td className='text-right'>{parseInt(item.salesAcc).toLocaleString()}명</td>
            <td className='pt-3 flex justify-center items-center'>{parseInt(item.rankInten) === 0 ? <FaMinus/> 
                                                : parseInt(item.rankInten) >0 ? <FaArrowUp className="text-rose-400"/>
                                                    :< FaArrowDown className="text-blue-600"/> }
                                                    {parseInt(item.rankInten) !== 0 && Math.abs(item.rankInten)}
                                
            </td>
        </tr>
      );
        setTrs(trs);
    }, [boxList])

    //boxoffice 데이터 fetch
    const getData = (dt) => {
      let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`
      url = url + `key=${process.env.REACT_APP_MV_API}&targetDt=${dt}`

      console.log(url)

      fetch(url)
      .then(resp => resp.json())
      .then(data => setBoxList(data.boxOfficeResult.dailyBoxOfficeList))
      .catch(err => console.log(err))
    }

    const handleSelDate = () => {
      console.log(boxRef.current.value.replaceAll('-',''))
      getData(boxRef.current.value.replaceAll('-',''));
    }

    return (
    <div className="w-full flex flex-col 
                    justify-center text-bold items-center">
       <div className="w-4/5 flex flex-col
                        justify-end items-center">
        <span className=' justify-end text-sm mx-5 font-bold'>날짜 선택:</span>
          <div className='flex'>
            <TailInput className = "justify-end"
                        type = "date"
                        inputRef={boxRef} 
                        handleChange = {handleSelDate}
                        ph = ""/>
          </div>
          
          <table className='w-4/5 border-1px border-t-slate-700'>
        <BoxOfficeThead />
        <thead className='h-10'>
            <tr className='
                            text-center
                          bg-slate-700 text-white' >
                <th className='w-20'>순위</th>
                <th>영화명</th>
                <th className='w-1/5'>매출액</th>
                <th className='w-1/5'>관객수</th>
                <th className='w-20'>증감율</th>
            </tr>
        </thead>
            {trs}
        <tfoot>
        </tfoot>
          </table>
          
          <div className='flex w-4/5 h-10 text-center text-bold
                      bg-blue-900 text-white justify-center items-center'>
        {selMv === undefined && '영화를 선택해주세요'}
        {selMv &&
        `[${selMv.movieCd}] ${selMv.movieNm} -
        누적 관객수 : ${parseInt(selMv.audiAcc).toLocaleString()}명
        누적 매출액 : ${parseInt(selMv.salesAcc).toLocaleString()}원`
        }
         </div>

        </div>
    </div>
  )
}
