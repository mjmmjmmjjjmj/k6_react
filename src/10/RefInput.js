import TailInput from "./TailInput"
import Tailbutton2 from "../UI2/Tailbutton2"
import { useState, useRef, useEffect } from "react"

export default function RefInput() {
    const inputRef = useRef();
    const [bts, setBts] = useState([]);
    const [tags, setTags] = useState([]);

    const handleAdd = () => {
        if(inputRef.current.value === '') {
            alert('값을 입력하세요');
            inputRef.current.focus();
            return;
        }
        setBts([inputRef.current.value, ...bts]);

    }
    
    useEffect(()=> {
        inputRef.current.value = ''
        inputRef.current.focus() ;
        let tm = bts.map((item, idx) =>
                        <Tailbutton2 caption={item}
                        key = {`$bt${idx}`}
                        color = "orange" />
    );
    console.log (tm);
        setTags(tm);
    }, [bts]);

    const handleRemove = () => {
        
    }

    return (
    <div className="w-11/12 flex flex-col
                    justify-center items-center">
        <div className="w-full flex
                        justify-center items-center">
        <div className="w-1/2 flex justify-center items-center">
            <TailInput type = "text"
                        inputRef={inputRef} 
                        ph = "값입력"/>
            {/* <input type=/> */}
        </div>
        <div className=" w-1/2 flex justify-center items-center ">
            <Tailbutton2 caption="등록"
                         color="blue"
            handleClick={handleAdd}/>

            <Tailbutton2 caption="취소"
                         color="blue"
            handleClick={handleRemove}/>
        </div>

    </div>
    <div className="w-full border p-5 bg-slate-100">
        {tags}
    </div>
    </div>
  )
}
