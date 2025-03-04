const passport = require('passport');
const User = require('../models/user');
const CustomError = require('../utils/error');
const wrapAsync = require('../utils/wrapAsync');

module.exports.newUser = (req, res) => {
    res.render('./user/signup');
}

module.exports.createUser = wrapAsync(async(req, res) => {
    try{
        const { username, password, email } = req.body;
        console.log(req.body);
        const newUser = new User({ username, email })
        const user = await User.register(newUser, password);
        console.log(user);
        res.redirect('/login');
    }catch(e){
        console.log(e);
        req.flash('error', 'User already exists');
        res.redirect('/signup');
    }
});

module.exports.loginUser = wrapAsync((req, res) => {
    const { username, password } = req.body;
    if(username || password){
        req.flash('error', 'All fields are required');
        res.redirect('/login')
    }
    let result = User.authenticate(username, password, (err) => {
        if(err){
            return next(new CustomError(500, 'Error when authenticating the User'))
        }
    })
    res.redirect('/');
})