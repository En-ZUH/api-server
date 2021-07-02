'use strict';
require('dotenv').config();

const server = require('../src/server');

const supergoose = require('@code-fellows/supergoose');
const request = supergoose(server.server);
let id;
xdescribe('api server', () => {

    it(('Test home page'), async () => {
        const response = await request.get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual('Welcome to home page 4');

    });


    it(('test clothes'), async () => {
        const response = await request.get('/foo');
        expect(response.status).toEqual(404);
    });


});

//____________________________________________________________________

describe('Testing Clothes', () => {

    it(('test empty clothes'), async () => {
        const response = await request.get('/api/v1/clothes');
        console.log('rsponse empty ARRRRRRay', response.body);
        expect(response.status).toEqual(200);
        expect(response.body).toEqual('No data yet');
    });

    it(('test creat clothes'), async () => {
        const data = { category: 'men', type: 'shirt' };

        const response = await request.post('/api/v1/clothes').send(data);
        console.log('rsponse CREAAAT', response.body);
        expect(response.status).toEqual(201);
        expect(response.body.type).toEqual('shirt');
    });

    it(('test creat clothes'), async () => {
        const response = await request.post('/api/v1/clothes').send({
            category: 'men',
            type: 'shirt',
        });
        id = response.body._id;
        // console.log('rsponse CREAAAT', response.body, 'id=======', id);
        expect(response.status).toEqual(201);
        expect(response.body.category).toEqual('men');
    });

    it(('get by ID'), async () => {
        console.log('iiiiiiiiiiiiiiddddddddddddd', id);

        const response = await request.get(`/api/v1/clothes/${id}`);
        console.log('rsponse id', response.body);
        expect(response.status).toEqual(200);
        expect(response.body.type).toEqual('shirt');
    });

    it(('test update clothes'), async () => {
        const response = await request.put(`/api/v1/clothes/${id}`).send({
            category: 'men',
            type: 'shirt55555',
        });

        expect(response.status).toEqual(200);
        expect(response.body.type).toEqual('shirt55555');
    });

    it(('test update clothes'), async () => {
        const response = await request.delete(`/api/v1/clothes/${id}`);


        expect(response.status).toEqual(200);

    });
    // it(('get by ID'), async () => {
    //     console.log('iiiiiiiiiiiiiiddddddddddddd', id);

    //     const response = await request.get(`/api/v1/clothes/${id}`);
    //     console.log('rsponse idd', response.body);
    //     expect(response.status).toEqual(200);

    // });

});