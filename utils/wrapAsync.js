// Wrap Async function to handle try and catch block
function wrapAsync(fn){
    return function(req, res, next) {
        fn(req, res, next).catch(next)
    }
}

module.exports = wrapAsync;