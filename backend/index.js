const mongoose = require('mongoose');
// mongoose.connect('mongodb://0.0.0.0:27017/orderList', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect('mongodb+srv://sudheesh:sudheesh@cluster0.xx2uihn.mongodb.net/orderList?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const express = require('express');
const app = express();
const port = process.env.PORT || 3003;
const cors = require('cors');
app.use(cors());

app.use(express.json());

const userSchema = new mongoose.Schema({

  title: String,
  img: String,
  text: String,
  btn: String,
  user: String
});
const orderModel = mongoose.model('orderModel', userSchema);



app.post('/api/saveCart', async (req, res) => {
  console.log("Hiooo");
  console.log(req.body.cart);
  const cartData = req.body.cart; 
  console.log(cartData);
  try {
    
    for (const item of cartData) {
      const newOrder = new orderModel(item);
      try {
        await newOrder.save();
      } catch (error) {
        console.error('Error saving item:', error);
      }
    }


    res.status(201).json({ message: 'Cart data saved successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Error saving cart data.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


module.exports = orderModel;

