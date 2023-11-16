const mongoose = require('mongoose')

mongoose
.connect('mongodb://127.0.0.1:27017/groupngame')
.then(() => {console.log('Succesfully connected to de databasde!')})
.catch((error) => {console.error(`Connection eneded with the following error: ${error}`)})