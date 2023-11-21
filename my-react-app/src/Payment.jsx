import React from 'react';
import cart from './Card'

    const cartData = [
      {id: 1,
        title: 'Sambar Rice',
        img:'../images/food-1.jpeg',
        text:'₹40',
        btn: 'Order your Food'},
    ];


const sendArr = async (cartData) => {
  console.log("sendArr function called");
  try {

    const response = fetch('http://localhost:3003/api/saveCart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cart: cart }),
    });

    if (response.ok) {
      console.log("Cart data sent and saved successfully.");
    } else {
      console.error("Failed to send and save cart data.");
    }

  } catch (error) {
    console.error("Error sending cart data:", error);
  }
};

function Payment() {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("handleSubmit function called");



    const cartButton = document.getElementById('cart_btn');
    if (cartButton) {
      const amount = cartButton.textContent;
      if (amount === "") {
        alert("Please select your foods");
      } else {
        var options = {
          key: "rzp_test_EPx5Nu2L6fJXNQ",
          key_secret: "nJVxsFIdPyE4GdejB65D4GVZ",
          amount: parseInt(amount) * 100, 
          currency: "INR",
          name: "HCL Cafe",
          description: "for testing purpose",
          
          handler: function (response) {
            console.log(response);
            if (response.razorpay_payment_id) {

              window.location.href = "./success.html?paymentId=" + response.razorpay_payment_id;
              sendArr(cartData);
            } else{
              window.location.href = './failure.html'; 
            }
          },
          
          prefill: {
            name: "G",
            email: "test@gmail.com",
            contact: "7904425033"
          },
          notes: {
            address: "Razorpay Corporate office"
          },
          theme: {
            color: "#3399cc"
          }
        };
        var pay = new window.Razorpay(options);
        pay.on('payment.failed', function (error) {
          console.error("Payment failed: ", error);
          window.location.href = './failure.html';
        });
        pay.open();
      }
    }
  }

  return (
    <div>
      <button onClick={handleSubmit} className="btn btn-success">
        Place Order for Rs.<strong id="cart_btn"></strong>
      </button>
    </div>
  )
}

export default Payment;

