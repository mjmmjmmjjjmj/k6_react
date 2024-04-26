
import { useRecoilValue } from "recoil"
import { isLogin } from './StAtom'
import Login from "./Login";

export default function Subway() {
  const isloginCheck = useRecoilValue(isLogin);

  return (
    <div>
      {isloginCheck ? "Subway" : <Login />}
    </div>
  )
}
