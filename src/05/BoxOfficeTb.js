import BoxOfficeData from './BoxOffice.json'
// import { FaArrowUp } from "react-icons/fa";
// import { FaArrowDown } from "react-icons/fa";
// import { FaMinus } from "react-icons/fa";
import { useState } from 'react';
import BoxOfficeTbody from './BoxOfficeTbody';
import BoxOfficeThead from './BoxOfficeThead';
import BoxOfficeInfo from './BoxOfficeInfo';

export default function BoxOfficeTb() {
  //
    const boxList = BoxOfficeData.boxOfficeResult.dailyBoxOfficeList
    console.log("boxlist=", boxList)
    //state 변수
    const [selMv, setSelMv] = useState();

    // const handleClick = (mv) => {
    //     console.log(mv)
    //     //할당연산자로 state 변수 변경 불가 => 업데이트 합수 변경
    //     // setMv = mv
    //     setSelMv(mv);
    // }
    // const trs = boxList.map(item =>
    //     <tr key = {item.movieCd} 
    //                 onClick={() => {handleClick(item)}}
    //                 className ='hover:font-bold hover:bg-blue-50 hover:cursor-pointer h-10'>
    //         <td className='text-center'>{item.rank}</td>
    //         <td className='text-left'>{item.movieNm}</td>
    //         <td className='text-right'>{parseInt(item.salesAmt).toLocaleString()}원</td>
    //         <td className='text-right'>{parseInt(item.salesAcc).toLocaleString()}명</td>
    //         <td className='pt-3 flex justify-center items-center'>{parseInt(item.rankInten) === 0 ? <FaMinus/> 
    //                                             : parseInt(item.rankInten) >0 ? <FaArrowUp className="text-rose-400"/>
    //                                                 :< FaArrowDown className="text-blue-600"/> }
    //                                                 {parseInt(item.rankInten) !== 0 && Math.abs(item.rankInten)}
                                
    //         </td>
    //     </tr>)

    return (
    <div className="w-full flex flex-col justify-center text-bold items-center">
      <table className='w-4/5 border-1px border-t-slate-700'>
        <BoxOfficeThead />
        {/* <thead className='h-10'>
            <tr className='
                            text-center
                          bg-slate-700 text-white' >
                <th className='w-20'>순위</th>
                <th>영화명</th>
                <th className='w-1/5'>매출액</th>
                <th className='w-1/5'>관객수</th>
                <th className='w-20'>증감율</th>
            </tr>
        </thead> */}
            {/* {trs} */}
            <BoxOfficeTbody boxList = {boxList} setSelMv={setSelMv}/>
        <tfoot>
            
        </tfoot>
      </table>
      <BoxOfficeInfo selMv={selMv}/>
        
      {/* <div className='flex w-4/5 h-10 text-center text-bold
                      bg-blue-900 text-white justify-center items-center'>
        {selMv === undefined && '영화를 선택해주세요'}
        {selMv &&
        `[${selMv.movieCd}] ${selMv.movieNm} -
        누적 관객수 : ${parseInt(selMv.audiAcc).toLocaleString()}명
        누적 매출액 : ${parseInt(selMv.salesAcc).toLocaleString()}원`
        }
      </div>                      */}
    </div>
  )
}
