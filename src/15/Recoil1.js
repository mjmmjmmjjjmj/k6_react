
import Recoil2 from "./Recoil2";
import { useRecoilValue } from "recoil";
import { rcnt } from "./RecoilAtom";

export default function Recoil1() {
    const cnt = useRecoilValue(rcnt);
  
    return (
    <div className="w-full h-full flex flex-col
                    text-lg font-bold
                    justify-center items-center">
    <div>
      Recoil :{cnt}
      <Recoil2/>
      </div>
    </div>
  )
}
