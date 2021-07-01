'use strict';

// const { beforeEach } = require('jest-circus');
const loggerMiddleware = require('../src/middleware/logger');

describe('logger middleware', () => {
    let consoleSpy;
    const request = {};
    const response = {};
    const next = jest.fn();


    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation(); // consoleSpy is the whole obj of console // autocall without print
    })
    afterEach(() => {
        consoleSpy.mockRestore();
    })

    // it('logs output correctly', () => {
    //     loggerMiddleware(request, response, next);
    //     expect(consoleSpy).toHaveBeenCalled();
    // })

    it('Moving To next Middileware', () => {
        loggerMiddleware(request, response, next);
        expect(next).toHaveBeenCalledWith();
    })
})