import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import ReactDOM from 'react-dom';

import App from './App'


let totalResult  = ''
let username = prompt("Enter your Name: ");

console.log(username);

ReactDOM.render(`Hello ${username}`,document.getElementById('home'));


let orderResult = function (arr) {
    let total = 0;

    for (const item of arr) {
        const textValue = parseFloat(item.text.replace('₹', ''));

        total += textValue;
    }
    totalResult = total;
    return total;
}

let cart = [];

function CardComponent(props) {
    function addToCart() {
       
        const itemToAdd = {
            img: props.img,
            title: props.title,
            text: props.text,
            menu: props.menu,
            btn: props.btn,
            user : username
        };

        if(props.btn == 'Order your Food'){
            console.log(cart);
            cart.push(itemToAdd);
        }
        
        console.log(cart);

        ReactDOM.render(orderResult(cart), document.getElementById('cart_btn'));
        ReactDOM.render(
            <App
                item="cart"
            />, document.getElementById('cart'))

        return orderResult(cart);
    }

    return (
        <Card style={{ width: '18rem', textAlign: 'center' }}>
            <Card.Img style={{ height: '12.5rem' }} variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
                <Button onClick={addToCart} href={'#' + props.menu} variant="primary">{props.btn}</Button>
            </Card.Body>
        </Card>
    )
}


export { cart as default, CardComponent, totalResult };