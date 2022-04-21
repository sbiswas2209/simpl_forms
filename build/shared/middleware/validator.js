"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestValidation = void 0;
const error_1 = __importDefault(require("../types/error"));
function requestValidation(location, schema, stripUnknown) {
    return async (req, _res, next) => {
        let _location;
        switch (location) {
            case 'query':
                _location = req.query;
                break;
            case 'body':
                _location = req.body;
        }
        try {
            switch (location) {
                case 'query':
                    req.query = await schema.validate(_location, { stripUnknown: stripUnknown !== null && stripUnknown !== void 0 ? stripUnknown : true });
                    break;
                case 'body':
                    req.body = await schema.validate(_location, { stripUnknown: stripUnknown !== null && stripUnknown !== void 0 ? stripUnknown : true });
            }
            next();
        }
        catch (err) {
            console.log(err);
            next(new error_1.default(`Validation Error.Validation failed at : ${err.errors.join(',')}`, 422));
        }
    };
}
exports.requestValidation = requestValidation;
//# sourceMappingURL=validator.js.map