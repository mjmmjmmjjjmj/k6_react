export default function MyDiv3({d11, d22, d33}) {
  return (
    <div className = 'w-4/5 h-4/5 flex justify-center items-start bg-green-500  text-lime-50 my-5'>
      <p className ="w-4/5 
                    flex justify-start
                    font-bold text-2xl
                    m-10
                    ">
      {`${d11} > ${d22} > ${d33}`}
      </p>

    </div>
  )
}
