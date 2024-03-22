import Tailbutton2 from "../UI2/Tailbutton2" ;

export default function TrafficNav({title, category, sel, setSel}) {
    //sel setSel : 
    const handleBtClick = (item) => {
        setSel(item);
    }

    const bts = category.map(item => 
        <Tailbutton2 caption  = {item}
                     color = {item == sel ? 'red': 'blue'}
                     key = {item}
                     handleClick = {()=> handleBtClick(item)} />
        );

  return (
    <div className="w-11/12 flex 
                    justify-between items-center">
        <h1 className="text-xl font-bold"> {/* 왼쪽div */}
            교통사고 {title}
        </h1>
        <div>
            {bts}
        </div>
    </div>
  )
}
