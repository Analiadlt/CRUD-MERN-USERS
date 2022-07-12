const mongoose = require('mongoose');

(async () => {
  try {      
    const db = await mongoose.connect("mongodb://localhost/crudmernstack");
    console.log('DB connected to', db.connection.name);
  } catch (err) {
    console.error(err);
  }
})()