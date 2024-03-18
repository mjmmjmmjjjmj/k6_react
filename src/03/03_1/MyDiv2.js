import MyDiv3 from "./MyDiv3"

export default function MyDiv2({d11, d22, d33}) {
  return (
    <div className = "w-4/5 h-2/3 flex flex-col justify-center items-center  bg-green-700  text-lime-50 my-5">
      <p className ="w-4/5 
                    flex justify-start 
                    font-bold text-2xl
                    m-10">
        {`${d11} > ${d22}`}
      </p>
      <MyDiv3 d11={d11} d22={d22} d33 = {d33} />

    </div>
  )
}
