import React from 'react';
import ReactDOM from 'react-dom';
import naveen from './lists/naveen.js'
import stalls from './lists/stalls.js'
import jkans from './lists/jkans.js'

import cart, { CardComponent } from './Card.jsx'

import './reactStyle.css'
import arr from './sales_data.js'


const currentDate = new Date();
const currentDay = currentDate.toLocaleString('en-US', { weekday: 'long' });
let data = ''

console.log(currentDay);
if (currentDay === 'Monday') {
    // data = transformedArray[0][0];
    data = arr[0];
} else if (currentDay === 'Tuesday') {
    data = arr[1];
} else if (currentDay === 'Wednesday') {
    data = arr[2];
} else if (currentDay === 'Thursday') {
    data = arr[3];
} else if (currentDay === 'Friday') {
    data = arr[5];
} else if (currentDay === 'Saturday') {
  data = arr[5];
} else {
    data = arr[6];
}

console.log(data);

function cardList(vals) {
    return (
        <CardComponent
            key={vals.id}
            img={vals.img}
            title={vals.title}
            text={vals.text}
            menu={vals.menuID}
            btn={vals.btn}
            user={vals.username}
        />
    )
}

function App(props){
    let item = props.item;
    if(item === 'season6'){
        return (
            <div className='cards'>
               { data.map(cardList)}
            </div>
            
        )
    }else if(item === 'naveen'){
        return (
            <div className='cards'>
               { naveen.map(cardList)}
            </div>
        )
    }else if(item === 'stalls'){
        return (
            <div className='cards'>
               { stalls.map(cardList)}
            </div>
        )
    }else if(item === 'cart'){
        return (
            <div className='cards'>
               { cart.map(cardList)}
            </div>
        )
    }else if(item === 'jkans'){
        return (
            <div className='cards'>
               { jkans.map(cardList)}
            </div>
        )
    }
    
  };


export default App;
