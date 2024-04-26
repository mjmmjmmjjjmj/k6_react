import { useRecoilState } from "recoil"
import { isLogin } from './StAtom'
import LogOut from "./LogOut";
import LoginForm from "./LoginForm"

import { useState, useEffect } from "react"

export default function Login() {
    const [user, setUser] = useState();
    const [isloginCheck, setIsLoginCheck] = useRecoilState(isLogin) ;
    
    const handleLogin = (u) => {
        localStorage.setItem('user', u);
        setUser(u);
        setIsLoginCheck(true);
    }
    
    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        setIsLoginCheck(false);
    }

    useEffect(() => {
        const luser = localStorage.getItem('user')
        console.log("luser", luser)
        if (luser) {
            setUser(luser);
            setIsLoginCheck(true)
        } 
        else {
            setUser(null);
            setIsLoginCheck(false);
        }
        
    }, [])

  return (
    <div className="flex flex-col items-center justify-center px-6 py-2 mx-auto">
        {isloginCheck ? <LogOut user = {user} handleLogout = {handleLogout}/> 
                      : <LoginForm handleLogin = {handleLogin} />}
      
    </div>
  )
}
