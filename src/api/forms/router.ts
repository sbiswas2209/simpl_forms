import {NextFunction, Request, Response, Router} from "express";
import { requestValidation } from "../../shared/middleware/validator";
import ErrorClass from "../../shared/types/error";
import { AddDataSchema, CreateFormSchema, FetchFormSchema, FetchResponsesSchema } from "./schema";
import { addData, createForm, getFormFields, getResponses } from "./service";

const formRouter = Router()

async function handleFormCreate(req: Request, res: Response, next: NextFunction) {
    try{
        const id = await createForm(req.body);
        res.status(201).json({
            success: true,
            code: id
        })
    }
    catch(e) {
        next(new ErrorClass(e.message, 500))
    }
}

async function handleFormFieldsFetch(req: Request, res: Response, next: NextFunction) {
    try{
        const data = await getFormFields(req.query.id.toString());
        res.status(200).json({
            success: true,
            data
        })
    }
    catch(e) {
        next(new ErrorClass(e.message, 500))
    }
}

async function handleFormSubmit(req: Request, res: Response, next: NextFunction) {
    try{
        await addData(req.body);
        res.status(200).json({
            success: true,
            message: "Response Added"
        })
    }
    catch(e) {
        next(new ErrorClass(e.message, 500))
    }
}

async function getFormResponses(req: Request, res: Response, next: NextFunction) {
    try{
        const data = await getResponses(req.query.id.toString());
        res.status(200).json({
            success: true,
            message: "Responses Fetched",
            data
        })
    }
    catch(e) {
        next(new ErrorClass(e.message, 500))
    }
}

formRouter.post("/create",requestValidation('body', CreateFormSchema) ,handleFormCreate)
formRouter.get("/fetch/fields", requestValidation('query', FetchFormSchema), handleFormFieldsFetch)
formRouter.get("/fetch/responses", requestValidation('query', FetchResponsesSchema), getFormResponses)
formRouter.post("/submit", requestValidation('body', AddDataSchema), handleFormSubmit)

export default formRouter