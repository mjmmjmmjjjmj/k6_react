import logo from '../logo.svg'
import "./HelloCss.css"
import HelloWhite from './HelloWhite.js'
import HelloYellow from './HelloYellow.js'

const HelloCss = () => {
  const apikey = process.env.REACT_APP_MV_API ;
  console.log(apikey)
  
  return (
    <div className='hellomain'>
        <p>
        <img className = "imglogo" src = {logo} alt = "logo" />
        </p>

        <HelloWhite />
        <HelloYellow />
    </div>
  )
}


export default HelloCss
