const db = require('./connection');
const { Product } = require('../models');

db.once('open', async () => {

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            name: 'Cake Pop',
            description: 'A small piece of cake on a stick!',
            image: 'cakepop1.JPG',
            price: 1.99
        },
    ]);

    console.log('products seeded');

    process.exit();
});