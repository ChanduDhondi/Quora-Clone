require('dotenv').config()
const express = require('express');
const path = require('path');
const ejsEngine = require('ejs-mate');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Post = require('./models/post.js');
const User = require('./models/user.js');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Routes
const postRoute = require('./routers/post');
const userRoute = require('./routers/user');
const CustomError = require('./utils/error.js');

const app = express();
const port = 8080;

// connecting to mongodb
main().then(() => console.log('Connected to MongoDB')).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/quora');
}

app.engine('ejs', ejsEngine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:true}));

const cookieOptions = {
    httpOnly: true,
    secure: true,
    maxAge: 7*24*60*60*1000,
}

const sessionOptions = {
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: cookieOptions
}

app.use(cookieParser())
app.use(session(sessionOptions))
app.use(flash())

app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// routers middlewares
app.use('/post', postRoute);
app.use('/', userRoute);

app.get('/', async (req, res) => {
    const posts = await Post.find();
    res.render('home.ejs', { posts });
})

app.all('*', (req, res, next) => {
    res.status(400).send('You Lost. No Route Exists...')
})

app.use((err, res) => {
    const { statusCode=500, msg='Server side Error' } = err;
    res.status(statusCode).send(msg);
});

app.listen(port, (req, res) => {
    console.log(`App is listening on port: ${port}!`);
});