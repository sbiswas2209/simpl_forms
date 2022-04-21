import * as yup from "yup";

const createForm = {
    name: yup.string().required().trim(),
    fields: yup.array().of(yup.object().shape({
        name: yup.string().required().trim(),
        type: yup.string().oneOf(["VARCHAR(255)", "INT"])
    }))
}

const fetchFormFields = {
    id: yup.string().length(6).required().trim()
}

const addData = {
    id: yup.string().length(6).required(),
    answers: yup.array().of(yup.object().shape({
        name: yup.string().required().trim(),
        value: yup.string().required()
    }))
}

const fetchResponses = {
    id: yup.string().length(6).required(),
    answers: yup.array().of(yup.object().shape({
        name: yup.string().required().trim(),
        value: yup.string().required()
    }))
}

export const CreateFormSchema = new yup.ObjectSchema(createForm);
export const FetchFormSchema = new yup.ObjectSchema(fetchFormFields);
export const AddDataSchema = new yup.ObjectSchema(addData);
export const FetchResponsesSchema = new yup.ObjectSchema(fetchResponses);