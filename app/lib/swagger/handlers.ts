import { getAll, post } from '../../soda/controller';
const swagger = require('swagger-node-express');

export const ListSodas = {
    spec: {
        description: 'Returns the list of sodas',
        name: 'soda',
        path: '/api/soda',
        method: 'GET',
        type: 'Soda',
        nickname: 'listBooks',
        produces: ['application/json'],
        parameters: [swagger.paramTypes.query("sortBy",
        "Sort books by title or isbn", "string")]
    },
    action: getAll
}

export const PostSoda = {
    spec: {
        description: 'Save a new Soda',
        name: 'soda',
        path: '/api/soda',
        method: 'POST',
        type: 'Soda',
        nickname: 'postSoda',
        produces: ['application/json'],
        parameters: [swagger.paramTypes.body("body", 'xd', 'json', `
{
    "name": "",
    "cont": 0,
    "typeCont": "",
    "flavor": "",
    "brand": "",
    "expDate": ""
}`      )]
    },
    action: post
}