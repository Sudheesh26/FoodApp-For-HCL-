import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import Payment from './Payment';
import totalResult, { CardComponent } from './Card'


const script = document.createElement('script');
script.src = 'https://apis.google.com/js/api.js';



ReactDOM.render(
  <App 
  item="stalls"
  />,document.getElementById('stalls'))

ReactDOM.render(
<App 
item="season6"
/>,document.getElementById('food-1'))

ReactDOM.render(
  <App 
  item="naveen"
  />,document.getElementById('food-2'))


  ReactDOM.render(
    <App 
    item="jkans"
    />,document.getElementById('food-3'))



ReactDOM.render(
<Payment
amount = {totalResult}
/>,document.getElementById('order_btn'))



