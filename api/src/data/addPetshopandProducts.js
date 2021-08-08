const Petshop = require('../models/petshop')
const Product = require('../models/product')
const petshops = require('./petfood.json')
const createRecipients = require('../services/pagarme').createRecipient

// database
require('../database')

const addPetshopsAndProducts = async () => {
    try {
        for (let petshop of petshops) {
            const newPetshop = await new Petshop({
                petshop,
            }).save()
            Product.insertMany(
                petshop.produtos.map((p) => ({
                    ...p,
                    petshop_id: newPetshop._id,
                }))
            )
        }

        console.log('Final do Script')
    } catch (err) {
        console.log(err.message)
    }
}

addPetshopsAndProducts()
