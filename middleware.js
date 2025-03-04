const User = require('./models/user');
const CustomError = require('./utils/error');

// validatePost middleware
module.exports.validatePost = (req, res, next) => {
    let { error } = req.body;
    if(error){
        res.status(404).send('All the fileds are required')
    }else{
        next();
    }
}

// User athenticate middleware