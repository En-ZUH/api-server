'use strict';

class Interface {
    constructor(myModel) {
        this.myModel = myModel;
    }

    get(_id) {
        if (_id)
            return this.myModel.find({ _id });
        else
            return this.myModel.find({});
    }

    creat(object) {
        const document = new this.myModel(object);
        return document.save();
    }

    update(_id, object) {
        return this.myModel.findByIdAndUpdate(_id, object, { new: true });
    }

    delete(_id) {
        return this.myModel.findByIdAndDelete(_id);
    }
}

module.exports = Interface;
