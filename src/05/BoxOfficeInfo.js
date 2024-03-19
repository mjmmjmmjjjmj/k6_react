import BoxOfficeData from './BoxOffice.json'

export default function BoxOfficeInfo({selMv}) {
    
  return (
    <div className='flex w-4/5 h-10 text-center text-bold
                      bg-blue-900 text-white justify-center items-center'>
        {selMv === undefined && '영화를 선택해주세요'}
        {selMv &&
        `[${selMv.movieCd}] ${selMv.movieNm} -
        누적 관객수 : ${parseInt(selMv.audiAcc).toLocaleString()}명
        누적 매출액 : ${parseInt(selMv.salesAcc).toLocaleString()}원`
        }
      </div>                     
  )
}

