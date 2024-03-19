import BoxOfficeData from './BoxOffice.json'
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";


export default function BoxOfficeTbody({boxList}) {
    
    const handleClick = (mv) => {
        console.log(mv)
        //할당연산자로 state 변수 변경 불가 => 업데이트 합수 변경
        // setMv = mv
        // setSelMv(mv);
    }

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
            </tr>)
    return (
        <tbody>
        {trs}
        </tbody>
  )
}
