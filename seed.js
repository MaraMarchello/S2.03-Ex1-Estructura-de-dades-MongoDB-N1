const mongoose = require('mongoose');
const faker = require('faker');
const { Customer, Glasses } = require('./models');

require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/opticians_shop';


mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));


const generateGlasses = () => ({
  brand: faker.company.companyName(),
  prescription: {
    rightEye: parseFloat((Math.random() * 10 - 5).toFixed(2)),
    leftEye: parseFloat((Math.random() * 10 - 5).toFixed(2))
  },
  mountingType: ['floating', 'paste', 'metal'][Math.floor(Math.random() * 3)],
  supportColor: faker.commerce.color(),
  glassColor: {
    rightEye: faker.commerce.color(),
    leftEye: faker.commerce.color()
  },
  price: parseFloat((Math.random() * 500 + 50).toFixed(2))
});


const generateCustomer = () => ({
  name: faker.name.findName(),
  postalAddress: {
    street: faker.address.streetAddress(),
    city: faker.address.city(),
    postalCode: faker.address.zipCode(),
    country: faker.address.country()
  },
  phoneNumber: faker.phone.phoneNumber(),
  email: faker.internet.email(),
  registrationDate: faker.date.past(2)
});


async function seedDatabase() {
  try {
    
    await Customer.deleteMany({});
    await Glasses.deleteMany({});

    
    const customers = Array(20).fill().map(generateCustomer);
    await Customer.insertMany(customers);

    
    const glasses = Array(30).fill().map(generateGlasses);
    await Glasses.insertMany(glasses);

    console.log('Database seeded successfully!');
    console.log(`Created ${customers.length} customers`);
    console.log(`Created ${glasses.length} glasses`);

  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.connection.close();
  }
}

seedDatabase(); 