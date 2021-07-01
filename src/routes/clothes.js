'use strict';

const express = require('express');

const Clothes = require('../models/data-collection-class');
const ClothesModel = require('../models/clothes');
const clothes = new Clothes(ClothesModel);

let router = express.Router();

const validator = require('../middleware/validator');


// http://localhost:4500/api/v1/clothes/ 

//_________________________________________________________________________


let creatClothes = async (request, response, next) => {
    let clothesObj = request.body;
    try {
        const responseObj = await clothes.creat(clothesObj);
        response.status(201).json(responseObj);
    }
    catch (error) { next(error) };

}

//_________________________________________________________________________


let getClothes = async (request, response, next) => {
    try {
        const responseObj = await clothes.get();
        if (responseObj.length === 0)
            response.json('No data yet');
        else
            response.json(responseObj);
    }
    catch (error) { next(error) };

}

//_________________________________________________________________________


let getCertainClothes = async (request, response, next) => { //by id
    let id = request.params.id;
    try {
        const responseObj = await clothes.get(id);
        response.json(responseObj[0]);
    }
    catch (error) { next(error) };
}

//_________________________________________________________________________

let updateClothes = async (request, response, next) => {
    let clothesObj = request.body;
    try {
        let id = request.params.id;
        const responseObj = await clothes.update(id, clothesObj);
        response.json(responseObj);
    }
    catch (error) { next(error) };
}

//_________________________________________________________________________


let deleteClothes = async (request, response, next) => {
    try {
        let id = request.params.id;
        const responseObj = await clothes.delete(id);
        response.json(responseObj);
    }
    catch (error) { next(error) };
}

//_________________________________________________________________________

router.get('/', getClothes);
router.get('/:id', Validator, getCertainClothes);
router.post('/', creatClothes);
router.put('/:id', Validator, updateClothes);
router.delete('/:id', Validator, deleteClothes);

//_________________________________________________________________________


module.exports = router;
