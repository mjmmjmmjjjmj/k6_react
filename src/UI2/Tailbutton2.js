export default function Tailbutton2({caption, color, handleClick}) {
    
    console.log(color)

    const colorObj = {
        'blue' : 'bg-blue-800',
        'red' : 'bg-red-800',
        'orange' : 'bg-orange-7800'
    }

    const hoverObj = {
        'blue' : 'hover-bg-blue-800',
        'red' : 'hover-bg-red-800',
        'orange' : 'hover-bg-orange-800'
    }
    
    const bColor = `px-4 py-2 m-2 rounded-md 
                    ${colorObj[color]} ${hoverObj[color]} 
                    text-white`;

    return (
        <button className={bColor}
           // <button className="hover:bg-slate-600"
            onClick={handleClick}>
          {caption}
        </button>
    )
  }
  