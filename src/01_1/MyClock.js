import MyClockTime from './MyClockTime'
import "./MyClock.css"
import Image from './MyClockImage'

function MyClock () {
    return (
        <div className = "mainArea">
            <MyClockTime />
            <MyClockImage />
            
        </div>
    )
}

export default MyClock ;