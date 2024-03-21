import MyClockTime from './MyClockTime'
import "./MyClock.css"
import MyClockImage from './MyClockImage';

function MyClock () {
    return (
        <div className = "mainArea">
            <MyClockImage />
            <MyClockTime />
            
        </div>
    )
}

export default MyClock ;