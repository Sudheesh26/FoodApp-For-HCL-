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

    const response = fetch('https://food-app-backend-ro21.onrender.com/api/saveCart', {
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
        alert("Please enter the amount");
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

              window.location.href = "./success.html"; 
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


////////////////////////////////


// import React, { useState } from 'react';
// import cart from './Card'
// // Define the cart data you want to send to the server
// const cartData = [
//   {
//     id: 1,
//     title: 'Sambar Rice',
//     img: '../images/food-1.jpeg',
//     text: '₹40',
//     btn: 'Order your Food',
//   },
// ];

// const sendArr = async (cartData) => {
//   console.log("sendArr function called");
//   try {
//     // Define the cart data you want to send to the server

//     const response = fetch('http://localhost:3000/api/saveCart', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ cart: cart }),
//     });

//     if (response.ok) {
//       // Handle success
//       console.log("Cart data sent and saved successfully.");
//       // You can add any additional actions you need here
//     } else {
//       // Handle failure
//       console.error("Failed to send and save cart data.");
//       // You can handle errors or show appropriate messages to the user here
//     }

//   } catch (error) {
//     console.error("Error sending cart data:", error);
//     // Handle the error as needed
//   }
// };


// const Payment = () => {
//   const [transactionDetails, setTransactionDetails] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const cartButton = document.getElementById('cart_btn');
//     if (cartButton) {
//       const amount = cartButton.textContent;
//       if (amount === "") {
//         alert("Please select your foods");
//       } else {
//         var options = {
//           key: "rzp_test_EPx5Nu2L6fJXNQ",
//           key_secret: "nJVxsFIdPyE4GdejB65D4GVZ",
//           amount: parseInt(amount) * 100, // Parse amount as an integer
//           currency: "INR",
//           name: "HCL Cafe",
//           description: "for testing purpose",

//           handler: function (response) {
//             if (response.razorpay_payment_id) {
//               // Payment was successful, store the transaction details
//               setTransactionDetails(response);
//               sendArr(cartData);
              
//               // Redirect to success page with transaction details as query parameters
//               const queryParams = new URLSearchParams(response).toString();
//               window.location.href = `./success.html?${queryParams}`;
//             } else {
//               // Payment failed, redirect to the failure page
//               window.location.href = './failure.html'; // Replace with the actual URL of your failure page
//             }
//           }
//           ,

//           prefill: {
//             name: "G",
//             email: "test@gmail.com",
//             contact: "7904425033"
//           },
//           notes: {
//             address: "Razorpay Corporate office"
//           },
//           theme: {
//             color: "#3399cc"
//           }
//         };
//         var pay = new window.Razorpay(options);
//         pay.on('payment.failed', function (error) {
//           console.error("Payment failed: ", error);
//           window.location.href = './failure.html';
//         });
//         pay.open();
//       }
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleSubmit} className="btn btn-success">
//         Place Order for Rs.<strong id="cart_btn"></strong>
//       </button>

//       {transactionDetails && (
//         <div>
//           <h2>Transaction Details:</h2>
//           <p>Payment ID: {transactionDetails.razorpay_payment_id}</p>
//           <p>Order ID: {transactionDetails.razorpay_order_id}</p>
//           {/* Add more details as needed */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Payment;
