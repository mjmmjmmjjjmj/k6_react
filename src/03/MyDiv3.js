export default function MyDiv3(probs) {
  return (
    <div className = 'w-4/5 h-4/5 flex justify-center items-start bg-green-500  text-lime-50 my-2'>
      <p className ="w-4/5 
                    flex justify-start
                    font-bold text-2xl
                    m-5
                    ">
      {`${probs.d1} > ${probs.d2} > ${probs.d3}`}
      </p>

    </div>
  )
}
