import { useState } from "react";

const fruits = ['apple', 'mango', 'banana', 'grapes', 'orange']
function FruitList(props){
    return (
        <>
            <ul>
                {
                    props.karan.map(fruit => <li>{fruit}</li>)
                }
            </ul>
        </>
    )
}

export default FruitList;
