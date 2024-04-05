import Tailbutton2 from "../UI2/Tailbutton2";
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import { rcnt } from "./RecoilAtom";

export default function Recoil3() {
  
  // const cnt = useRecoilValue(rcnt) ;
  // const setCnt = useSetRecoilState(rcnt)

  const [cnt, setCnt] = useRecoilState(rcnt)
  const handleUp = () => {
    setCnt(cnt + 1) ;
  }
    return (
    <div>
      <div className="w-full">
      <Tailbutton2 caption = '증가'
                    color = 'blue'
                    handleClick={handleUp}/>
    </div>
    </div>
  )
}
