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
        {
            name: 'Macaroon',
            description: 'A french cookie with a soft almond center',
            image: 'macaron.jpg',
            price: 2.99
        },
        {
            name: 'Angel Food Cake',
            description: 'Sponge cake topped with vanilla frosting',
            image: 'angelcake.jpg',
            price: 12.99
        },
        {
            name: 'Chocolate Cupcake',
            description: 'A chocolate cupcake topped with chocolate frosting and sprinkles',
            image: 'chocolatecupcake.jpg',
            price: 1.75
        },
        {
            name: 'Cinnamon Roll',
            description: 'A sweet roll infused with cinnamon and sugar, topped with vanilla icing',
            image: 'cinnamonroll.jpg',
            price: 2.99
        }


    ]);

    console.log('products seeded');

    process.exit();
});