import React, { Component } from "react";
import Cell from "./Cell";
import board from "./faster_game.css"


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


export default Board;