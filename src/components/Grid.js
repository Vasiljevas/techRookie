import React from 'react';
import upPic from '../assets/up.jpg';
import rightPic from '../assets/right.JPG';
import downPic from '../assets/down.jpg';
import leftPic from '../assets/left.jpg';



function returnPic(dir) {
    if(dir === 'up') return <image src={upPic}/>
    else if(dir === 'right') return <image src={rightPic} />
    else if(dir === 'down') return <image src={downPic} />
    else return <image src={leftPic} />
    
}

function Grid({xLocation, yLocation, direction}) {


    const matrix = new Array(10).fill(0).map(() => new Array(9).fill(0));

    

    return (
        <div>
            {matrix.map((x, y)=> {
                if(x === xLocation && y === yLocation) return returnPic(direction);
                return '0';
            })}
        </div>
    );
    

}

export default Grid;





