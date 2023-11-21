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

        total += (item.quantity)*textValue;
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
            user : username,
            quantity: 1 
        };

        const existingItemIndex = cart.findIndex(item => (
            item.title === itemToAdd.title && item.user === itemToAdd.user
        ));

        if(props.btn == 'Order your Food'){
            if (existingItemIndex !== -1) {
                cart[existingItemIndex].quantity += 1;
    
                console.log(cart[existingItemIndex].quantity);
            } else {
                cart.push(itemToAdd);
            }
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
        <Card className='card_select' style={{ width: '18rem', textAlign: 'center', margin:'15px'}}>
            <Card.Img style={{ height: '12.5rem' }} variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
                <Button onClick={addToCart} href={'#' + props.menu} variant="primary">{props.btn}</Button>

                {cart.map(item => (
                    item.title === props.title && item.user === username && (
                        <div key={item.title + item.user}>
                            <p>Quantity: {item.quantity}</p>
                        </div>
                    )
                ))}
                
            </Card.Body>
        </Card>
    )
}


export { cart as default, CardComponent, totalResult };
