
export default function BoxOfficeThead() {
  return (
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
  )
}
