'use strict';

const server = require('../src/server');
const supertest = require('supertest');
// const { expect } = require('@jest/globals');
const mockRequest = supertest(server.app);


xdescribe('API Server', () => {


    it('404 bad route', async () => {
        let route = '/api/v1/foo';
        const response = await mockRequest.get(route);
        expect(response.status).toBe(404);
    })

    it('404 bad Method', async () => {
        let route = '/api/v1/food';
        const response = await mockRequest.post(route);
        expect(response.status).toBe(404);
    })

    it('500 No Name in query', async () => {   //////////
        let route = '/person?name=';
        const response = await mockRequest.get(route);
        expect(response.status).toBe(500);
    })

    it('200 /clothes success', async () => {
        let route = '/api/v1/food';
        const response = await mockRequest.get(route);
        // let parseData = JSON.parse(response.text);
        // console.log('This is the error ya enass', parseData);
        expect(response.status).toBe(200);

        // expect(parseData).toEqual({
        //     name: 'Enas',
        // });
    })
    it('root route called', async () => {
        let route = '/';
        const response = await mockRequest.get(route);
        expect(response.status).toBe(200);
        expect(response.text).toEqual('Welcome to page2- Enas');
    })

})