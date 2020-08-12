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

let array = [];
for (let i = 1; i <= 25; i++) {
  array.push(i);
}

function Game_Container() {
    const [numbers, setNumbers] = useState(array);
    const [gameFlag, setGameFlag] = useState(false);
    const [current, setCurrent] = useState(1);
    const [timeElapsed, setTimeElapsed] = useState(0);

    const handleClick = num => {
        if(num === current) {
            if(num === 50) {
                console.log("Success");
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

    const style = {
        width: '600px',
        height: '800px',
        border: '1px solid black'
    }

  return (
    <div style={style}>
      <Board numbers={numbers} handleClick={handleClick}></Board>
    </div>
  );
}

// const Container = styled.div`
//   width: 600px;
//   height: 800px;
//   border: 1px solid black;
// `;

export default Game_Container;