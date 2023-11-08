const express = require('express');
const app = express();
const mongoose = require('mongoose');
const orderModel = require('./orderModel');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect('mongodb+srv://sudheesh:sudheesh@cluster0.xx2uihn.mongodb.net/orderList?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
  orderModel.find()
  .then((data) => {
    console.log(data);
    
    // data.forEach((doc) => {
    //   const dataObject = doc.toObject();
    //   // const user = dataObject.user;
    //   doc.user = dataObject.user;
    //   console.log(`User: ${doc.user}`);
    // });

    res.render('index', { data: data });
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send('Error retrieving data from MongoDB');
  });
  
});

app.post('/delete', (req, res) => {

    const deleteItemID = req.body.checkbox;
    const name = req.body.list;
  
    console.log(deleteItemID);
  
    orderModel.findByIdAndRemove(deleteItemID)
        .then((deletedItem) => {
          console.log('Deleted item:', deletedItem);
          res.redirect('/')
        })
        .catch((err) => {
          console.error('Error while deleting item:', err);
        });
    
    
  
  })

app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});
