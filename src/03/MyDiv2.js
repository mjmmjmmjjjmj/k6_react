import MyDiv3 from "./MyDiv3"

export default function MyDiv2(probs) {
  console.log(probs)
  return (
    <div className = "w-4/5 h-2/3 flex flex-col justify-center items-center  bg-green-700  text-lime-50 my-2">
      <p className ="w-4/5 
                    flex justify-start 
                    font-bold text-2xl
                    m-5">
        {`${probs.d1} > ${probs.d2}`}
      </p>
      <MyDiv3 d1={probs.d1} d2={probs.d2} d3 = {probs.d3} />

    </div>
  )
}
