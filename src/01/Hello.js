import "./Hello.css";

function Hello() {
    let n = Math.floor(Math.random() *99) + 1 ;

    const st1 = {
        backgroundColor : "darkblue",
        color : "white"
    }

    // let s = '' ;
    // if (n % 2 === 0) s = "짝";
    // else s = "홀";
    
    let x;
    
    return(
        <h1 >
            <span style= {st1}> Hello </span>
            <span style = {{display:"inline-flex", margin: "10px"}}>
                {/* { n < 10 && "0"}
                {n} */}
                { n < 10 ? `0${n}` : n } {/* 삼항연산자로 쓰는 방법 */}
            </span>
            { n % 2 === 0 ? "짝수" : "홀수"}
            { n % 2 === 0
                ? <span style={{color:"red"}}>짝수</span>
                : <span style={{color:"blue"}}>홀수</span>}
            { n % 2 === 0 && "😘"}
            { n % 2 === 1 && "😍"}
            {/* <p>{x || "x는 undefined입니다."}</p> */}
            {/* {s} */}
        </h1>
    );
}

export default Hello ;