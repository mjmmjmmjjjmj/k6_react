function MyClockTime() {
    const currentTime= new Date();
    return (
        <div>
            현재시각 : {currentTime.toLocaleTimeString()}
        </div>
    )
}