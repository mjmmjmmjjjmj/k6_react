import Image from '../logo.svg'

function MyClockImage () {
    return (
       <div style = {{margin: "10px"}}>
        <img src = {MyClockImage}/>

       </div> 
    )
}


function MainHeader(){
    return(
        <header className="App-header">
            <img src={logo} className='App-logo' alt="logo"/>
        </header>
    );
}

export default MyClockImage