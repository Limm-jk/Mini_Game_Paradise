import React, { Component } from "react";
import Cell from "./Cell";
import board from "./faster_game.css"

// class Board extends Component{
//     render(){
//         return(
//             <div class="board">
//                 <Cell></Cell>
//                 <Cell></Cell>
//                 <Cell></Cell>
//                 <Cell></Cell>
//                 <Cell></Cell>
//             </div>
//         )
//     }
// }
function Board( {numbers,handleClick} ) {
    console.log("Board");
  return (
    <div class="board">
      {numbers.map((num, index) => (
          <Cell num={num} key={index} handleClick={handleClick}/>
      ))}
    </div>
  );
}

// const Container = styled.div`
//   width: 400px;
//   height: 400px;
//   border: 1px solid blue;
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
//   grid-template-rows: repeat(5, 1fr);
// `;

export default Board;