"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validator_1 = require("../../shared/middleware/validator");
const error_1 = __importDefault(require("../../shared/types/error"));
const schema_1 = require("./schema");
const service_1 = require("./service");
const formRouter = (0, express_1.Router)();
async function handleFormCreate(req, res, next) {
    try {
        const id = await (0, service_1.createForm)(req.body);
        res.status(201).json({
            success: true,
            code: id
        });
    }
    catch (e) {
        next(new error_1.default(e.message, 500));
    }
}
async function handleFormFieldsFetch(req, res, next) {
    try {
        const data = await (0, service_1.getFormFields)(req.query.id.toString());
        res.status(200).json({
            success: true,
            data
        });
    }
    catch (e) {
        next(new error_1.default(e.message, 500));
    }
}
async function handleFormSubmit(req, res, next) {
    try {
        await (0, service_1.addData)(req.body);
        res.status(200).json({
            success: true,
            message: "Response Added"
        });
    }
    catch (e) {
        next(new error_1.default(e.message, 500));
    }
}
async function getFormResponses(req, res, next) {
    try {
        const data = await (0, service_1.getResponses)(req.query.id.toString());
        res.status(200).json({
            success: true,
            message: "Responses Fetched",
            data
        });
    }
    catch (e) {
        next(new error_1.default(e.message, 500));
    }
}
formRouter.post("/create", (0, validator_1.requestValidation)('body', schema_1.CreateFormSchema), handleFormCreate);
formRouter.get("/fetch/fields", (0, validator_1.requestValidation)('query', schema_1.FetchFormSchema), handleFormFieldsFetch);
formRouter.get("/fetch/responses", (0, validator_1.requestValidation)('query', schema_1.FetchResponsesSchema), getFormResponses);
formRouter.post("/submit", (0, validator_1.requestValidation)('body', schema_1.AddDataSchema), handleFormSubmit);
exports.default = formRouter;
//# sourceMappingURL=router.js.map