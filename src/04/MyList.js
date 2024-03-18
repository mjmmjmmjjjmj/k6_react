export default function MyList({title, imgUrl, content}) {
  return (
    <div className="w-10/12 flex border rounded">
      <div className="w-1/4 max-w-40">
        <img src = {imgUrl} alt = {title} />
      </div> 
      <div className="w-3/4 p-2">
        <div className="text-2xl font-bold text-gray-700">
          <span>{title}
          </span>
        </div>
        <p>
          {content}
        </p>
        
        <p className="w-full flex justify-end items-center mt-5 font-bold">
        <span className="text-rose-600"> ❤ 
        </span>
        <span>좋아요
        </span>
        <span>
          0
        </span>
        </p>
      </div>
    </div>
  )
}
