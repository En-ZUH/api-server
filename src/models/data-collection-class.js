'use strict';

class Interface {
    constructor(myModel) {
        this.myModel = myModel;
    }

    get(id) {
        if (id)
            return this.myModel.find({ id });
        else
            return this.myModel.find({});
    }

    creat(object) {
        const document = new this.myModel(object);
        return document.save;
    }

    update(id, object) {
        return this.myModel.findByIdThenUpdate(id, object, { new: true });
    }

    update(id) {
        return this.myModel.findByIdThenDelete(id);
    }
}

module.exports = Interface;
