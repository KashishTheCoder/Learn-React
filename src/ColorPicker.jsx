import { useState } from 'react';

function ColorPicker(props){
    const [color, setColor] = useState('white');

    
    return (
        <>
            <div style={{backgroundColor: color, height: "100em", width: "100em"}}>
                <button onClick={()=> setColor('red')} style = {{backgroundColor: 'red', border: 'none'}}>Red</button>
                <button onClick={()=> setColor('pink')} style = {{backgroundColor: 'pink', border: 'none'}}>Pink</button>
                <button onClick={()=> setColor('blue')} style = {{backgroundColor: 'blue', border: 'none'}}>Blue</button>
                <button onClick={()=> setColor('green')} style = {{backgroundColor: 'green', border: 'none'}}>Green</button>
                <button onClick={()=> setColor('yellow')} style = {{backgroundColor: 'yellow', border: 'none'}}>Yellow</button>
            </div>
        </>
    );
}

export default ColorPicker;