const express = require('express')
const dotenv = require("dotenv");
dotenv.config()
const app = express();
const mongoose = require('mongoose')
const Fruit = require('./models/fruits')
const methodOverride = require('method-override'); 
const morgan = require('morgan');
const path = require('path');

if (!process.env.MONGODB_URI) {
        console.error('MONGODB_URI not set in environment (.env)');
        process.exit(1);
}

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
        console.log('Connected to MongoDB' + mongoose.connection.name);
})

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public')));


app.get("/", async (req, res) => {
    res.render("index.ejs")
}); // the landing page route when the user goes to http://localhost:3000/

// Index Route Get all fruits
app.get("/fruits", async (req, res) => {
    //reach out to the DB and get all fruits
    //send the fruits to the view
    // view is going to generate html
    //send html to the browser 
    const allFruits = await Fruit.find({});
    res.render("fruits/index.ejs", { fruits: allFruits });
})

// New Route Get Form to create new fruit
app.get("/fruits/new", (req, res) => {
  res.render("fruits/new.ejs");
});


// Create Route Post new fruit in DB
app.post("/fruits", async (req, res) => {
    if (req.body.isReadyToEat === 'on') {
        req.body.isReadyToEat = true;
    } else {
        req.body.isReadyToEat = false;
    }
    await Fruit.create(req.body);
    res.redirect("/fruits");
   })
// Show Route Get one fruit by ID
app.get("/fruits/:fruitId", async (req, res) => {
    const foundFruit = await Fruit.findById(req.params.fruitId);
    res.render('fruits/show.ejs', { fruit: foundFruit });
});




// Edit Route Get edit form

app.get("/fruits/:fruitId/edit", async (req, res) => {
    const foundFruit = await Fruit.findById(req.params.fruitId);
    res.render("fruits/edit.ejs", { fruit: foundFruit });
})

// Update Route Edit fruit in DB
app.put("/fruits/:fruitId", async (req, res) => {
    if (req.body.isReadyToEat === 'on') {
        req.body.isReadyToEat = true;
    } else {
        req.body.isReadyToEat = false;
    }
    await Fruit.findByIdAndUpdate(req.params.fruitId, req.body);
    res.redirect("/fruits");
})

// Delete Route Delete fruit in DB
app.delete("/fruits/:fruitId", async (req, res) =>{
    await Fruit.findByIdAndDelete(req.params.fruitId);
    res.redirect("/fruits");
})


app.listen(3000, () => {
    console.log('listening on port 3000')
}); 

