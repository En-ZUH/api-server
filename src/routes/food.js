'use strict';

const express = require('express');

const Food = require('../models/data-collection-class');
const foodModel = require('../models/food');
const food = new Food(foodModel);

let router = express.Router();

const validator = require('../middleware/validator');


// http://localhost:4500/api/v1/food/ 

//_________________________________________________________________________


let creatFood = async (request, response, next) => {
    let foodObj = request.body;
    try {
        const responseObj = await food.creat(foodObj);
        response.status(201).json(responseObj);
    }
    catch (error) { next(error) };

}

//_________________________________________________________________________


let getFood = async (request, response, next) => {
    try {
        const responseObj = await food.get();
        if (responseObj.length === 0)
            response.json('No data yet');
        else
            response.json(responseObj);
    }
    catch (error) { next(error) };

}

//_________________________________________________________________________


let getCertainFood = async (request, response, next) => { //by id
    let id = request.params.id;
    try {
        const responseObj = await food.get(id);
        response.json(responseObj[0]);
    }
    catch (error) { next(error) };
}

//_________________________________________________________________________

let updateFood = async (request, response, next) => {
    let foodObj = request.body;
    try {
        let id = request.params.id;
        const responseObj = await food.update(id, foodObj);
        response.json(responseObj);
    }
    catch (error) { next(error) };
}

//_________________________________________________________________________


let deleteFood = async (request, response, next) => {
    try {
        let id = request.params.id;
        const responseObj = await food.delete(id);
        response.json(responseObj);
    }
    catch (error) { next(error) };
}

//_________________________________________________________________________

router.get('/', getFood);
router.get('/:id', Validator, getCertainFood);
router.post('/', creatFood);
router.put('/:id', Validator, updateFood);
router.delete('/:id', Validator, deleteFood);

//_________________________________________________________________________


module.exports = router;
