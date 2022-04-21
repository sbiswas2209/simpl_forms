"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchResponsesSchema = exports.AddDataSchema = exports.FetchFormSchema = exports.CreateFormSchema = void 0;
const yup = __importStar(require("yup"));
const createForm = {
    name: yup.string().required().trim(),
    fields: yup.array().of(yup.object().shape({
        name: yup.string().required().trim(),
        type: yup.string().oneOf(["VARCHAR(255)", "INT"])
    }))
};
const fetchFormFields = {
    id: yup.string().length(6).required().trim()
};
const addData = {
    id: yup.string().length(6).required(),
    answers: yup.array().of(yup.object().shape({
        name: yup.string().required().trim(),
        value: yup.string().required()
    }))
};
const fetchResponses = {
    id: yup.string().length(6).required(),
    answers: yup.array().of(yup.object().shape({
        name: yup.string().required().trim(),
        value: yup.string().required()
    }))
};
exports.CreateFormSchema = new yup.ObjectSchema(createForm);
exports.FetchFormSchema = new yup.ObjectSchema(fetchFormFields);
exports.AddDataSchema = new yup.ObjectSchema(addData);
exports.FetchResponsesSchema = new yup.ObjectSchema(fetchResponses);
//# sourceMappingURL=schema.js.map