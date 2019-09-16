module.exports.models = {
    Soda: {
        id: 'Soda',
        required: ['name', 'cont', 'typeCont', 'flavor', 'brand', 'expDate'],
        properties: {
            name: {
                type: 'string',
                description: 'Name of the soda'
            },
            cont: {
                type: 'double',
                description: 'Content in liters'
            },
            typeCont: {
                type: 'string',
                description: 'Liters'
            },
            flavor: {
                type: 'string',
                description: 'Name of the flavor'
            },
            brand: {
                type: 'string',
                description: 'Name of the brand'
            },
            expDate: {
                type: 'string',
                description: 'Expiration date'
            }
        }
    }
}
