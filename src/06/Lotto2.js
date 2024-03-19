import Tailbutton2 from "../UI2/Tailbutton2"
import TailBall from "../UI2/TailBall"
import { useState } from "react"

export default function Lotto() {
    
    const [ballTags, setBallTags] = useState();
    
    const handleLottoClick = () => {
        let nums = [];

        while (nums.length < 7) {
            let n = Math.floor(Math.random() * 45) + 1;
            if(!nums.includes(n)) nums.push(n);
        }
        console.log(nums)
        nums.splice(6,0,'+');

        const tm = nums.map((item,idx) => 
            idx === 6 ? <span className="text-2xl font-bold mx-2"> 
                        {item} 
                        </span>
                      : <TailBall n = {item} key = {`balls${item}`}/>
        // {
        //     if (idx === 5)
        //     return <> 
        //         <TailBall n = {item} key = {`ball${item}`}/>
        //         <div className="font-bold text-2xl"> + </div>
        //         </>
        //     else 
        //         return <TailBall n = {item} key = {`ball${item}`}/>
        // }
        )
            setBallTags(tm) ;
    }
    const handleLottoClick2 = () => {
        console.log('handleLottoClick2')
    }

        return (
    <div className="flex flex-col 
                    justify-center items-center
                    w-full h-full">
        <div className="flex justify-center items-center
                        my-10">
        {ballTags}
        {/* <TailBall n = {1} />
        <TailBall n = {11} />
        <TailBall n = {22} />
        <TailBall n = {33} />
        <TailBall n = {44} />
        <TailBall n = {46} /> */}
        </div>
        <div>
        <Tailbutton2 caption = "로또번호생성"
                     color = 'red'
                     handleClick={handleLottoClick}/>
        </div>
    </div>
  )
}
