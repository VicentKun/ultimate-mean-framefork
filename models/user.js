// app/models/user.js

// load the things we need
var mongoose = require('mongoose');
// var bcrypt = require('bcrypt-nodejs');

var ObjectId = require('mongoose').Types.ObjectId;

// define the schema for our user model
var userSchema = mongoose.Schema({
    email: String,
    username: String,
    password: String,
    name: String,
    surname: String,
    web: String
});

// methods ======================

userSchema.methods.setUser = function (params, done) {  

    console.log(params);
    

    var newUser = new userModel();

    newUser.username = 'VicentKun';
    newUser.password = '123456';
    newUser.name = 'Vicent';
    newUser.surname = 'Kun';
    newUser.web = 'www.vicentkun.com';

    console.log(newUser);


    newUser.save(function (err, user) {

        if (err) { throw err; console.log(err); return; }

        done({result: user});

    });  
    
};

userSchema.methods.getUser = function (params, done) {       
       
    // This var is for dummi, normal case [ params.web ] have web parameter recived by post.   
    var web = 'www.vicentkun.com';

    userModel.findOne({web: web}, function (err, user) {
        
        if (err) done({err: err});
        
        done({result:user});
        
    });
    
};


// create the model for users and expose it to our app
var userModel = mongoose.model('User', userSchema);

module.exports = userModel;