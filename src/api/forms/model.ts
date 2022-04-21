export interface CreateForm {
    name: string;
    fields: Field[]
}

export interface Field {
    name: string,
    type: "STRING" | "INT"
}

export interface FormResponse {
    id: string;
    answers: Answer[]
}

export interface Answer {
    name: string;
    value: string | number;
}