const mongoose = require('mongoose')

function connect () {
    mongoose.set('useCreateIndex', true);
    mongoose.connect('mongodb://localhost/complaintapp',{useNewUrlParser: true})
}

module.exports = connect