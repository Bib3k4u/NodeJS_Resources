const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/testing';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String
});

const Person = mongoose.model('Person', personSchema);

async function createPerson() {
  try {
    await mongoose.connection;

    const newPerson = new Person({
      name: 'Baban',
      age: 24,
      email: 'baban@example.com'
    });

    await newPerson.save();

    console.log('Person document inserted successfully');

  } catch (error) {
    console.error('Error creating person:', error);
  } finally {
    await mongoose.connection.close();
    console.log('Connection closed');
  }
}

createPerson();
