const Joi = require('joi');

module.exports.postSchema = Joi.object({
    title: Joi.string().required().min(4),
    description: Joi.string().required()
})

