//판 내부의 각각의 네모칸 객체가 될 것
import React, { Component } from "react";

// class Cell extends Component{
//     render() {
//         const style = {
//             border: '1px solid red'
//         }

//         return (
//             <div style={style}>숫자^^</div>
//         )
//     }
// }

function Cell( { num, handleClick } ) {
    console.log("Cell");
    const style = {
        border: '1px solid red',
    }
    const num_style = {
        transform: 'translate(0%, 120%)'
    }
    return (
        <div style={style} onClick={() => handleClick(num)}>
            <center style={num_style}>
                <b>{num !== 0 ? num : null}</b>
            </center>
        </div>
    );
}

// const Container = styled.div`
//   border: 1px solid red;
// `;

export default Cell;