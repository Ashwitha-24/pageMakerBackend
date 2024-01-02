/**
 * @constant mongoose orm library for mongodb database
*/
const mongoose = require('mongoose');

/**
 * @constant Joi data validation library
*/
const Joi = require('joi');

const { v4: uuidv4 } = require('uuid');

/**
 * @constant userSchema schema for user module
*/
const userSchema = new mongoose.Schema({
    uniqueId: {
        type: String,
        default: () => uuidv4(),
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'],
    },
    mobileNumber: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true
    }
}, { timestamps: true })

const userModel = mongoose.model('user', userSchema);

/** user schema for sign-up validation with joi*/
/**
 * @constant userSchemaValidator validation for user modulue will be used in users middleware
*/
const userSchemaValidator = Joi.object({
    fullName: Joi.string().required(),
    email: Joi.string().email({ minDomainSegments: 1, tlds: { allow: ['com', 'io', 'in', 'org'] } }).allow('', null),
    mobileNumber: Joi.string().required()
});

module.exports = {
    model,
    userModel,
    userSchemaValidator
}
