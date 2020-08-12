// Controller
// import React, { Component } from 'react'
// import Board from './Board';

// class Game_Container extends Component{
//     const [numbers, setNumbers] : useState(array)
//     const [gameFlag, setGameFlag] : useState(false);
//     const [current, setCurrent] : useState(1);
//     const [timeElapsed, setTimeElapsed] : useState(0);

//     render(){
        
        // const style = {
        //     width: '600px',
        //     height: '800px',
        //     border: '1px solid black'
        // }

//         return(
//             <div style={style}>
//                 <Board/>
//             </div>
//         )
//     }
// }

// export default Game_Container

import React, { useState } from "react";
import Board from "./Board";
import Timer from "./Timer";

let array = [];
for (let i = 1; i <= 25; i++) {
  array.push(i);
}

function Game_Container() {
    const [numbers, setNumbers] = useState(array);
    const [gameFlag, setGameFlag] = useState(false);
    const [current, setCurrent] = useState(1);

    const handleClick = num => {
        if(num === current) {
            if(num === 50) {
                console.log("Success");
                GameEnd();
            }
            const index = numbers.indexOf(num);
            setNumbers(numbers => [
                ...numbers.slice(0, index),
                num < 26 ? num + 25 : 0,
                ...numbers.slice(index+1)
            ]);
            setCurrent(current => current + 1);
        }
    };

    const GameStart = () => {
        setNumbers(suffleNumber(array));
        setGameFlag(true);
        setCurrent(1);
    }
    const GameEnd = () => {
        setGameFlag(false)
    }
    const suffleNumber = (array) => {
        for(let i = array.length - 1; i > 0; i--){
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const style = {
        width: '600px',
        height: '800px',
        border: '1px solid black',
    }


  return (
    <div style={style}>
        <h1>당신의 게임. 순발력게임으로 대체되었다.</h1>
        <center class="central">
        <Board numbers={numbers} handleClick={handleClick}></Board>
        {gameFlag ? 
            (
                <div>
                    <a>게임중^~^</a>
                    <Timer/>
                </div>
            ) : 
            <button class="startButton" onClick={GameStart}>게임시작</button>
        }
        </center>
    </div>
  );
}

// const Container = styled.div`
//   width: 600px;
//   height: 800px;
//   border: 1px solid black;
// `;

export default Game_Container;