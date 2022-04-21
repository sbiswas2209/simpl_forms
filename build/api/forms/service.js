"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResponses = exports.addData = exports.getFormFields = exports.createForm = void 0;
const nanoid_1 = require("nanoid");
const database_1 = __importDefault(require("../../loaders/database"));
const logger_1 = __importDefault(require("../../loaders/logger"));
async function createForm(formDetails) {
    const id = (0, nanoid_1.nanoid)(6);
    const sql = `CREATE TABLE ${id} (id VARCHAR(255) PRIMARY KEY, ${formDetails.fields
        .map(e => e.name + ' ' + e.type)
        .join(',')})`;
    logger_1.default.info(sql);
    (await (0, database_1.default)()).query(sql, function (err, result) {
        if (err)
            throw err;
        logger_1.default.info('Table created', result);
    });
    return id;
}
exports.createForm = createForm;
async function getFormFields(id) {
    const sql = `SELECT * FROM INFORMATION_SCHEMA.COLUMNS
  WHERE TABLE_NAME = N'${id}'
  `;
    const data = [];
    logger_1.default.info(sql);
    const connection = await (0, database_1.default)();
    await new Promise((resolve, _reject) => {
        connection.query(sql, function (err, result) {
            if (err)
                throw err;
            logger_1.default.info('Table Data fetched');
            console.log(result);
            result.forEach(e => {
                data.push({ name: e.COLUMN_NAME, type: e.COLUMN_TYPE.toString() });
            });
            console.log(data);
            resolve(data);
        });
    });
    return data;
}
exports.getFormFields = getFormFields;
async function addData(response) {
    const sql = `INSERT INTO ${response.id} (id, ${response.answers.map(e => e.name).join(',')}) VALUES ('${(0, nanoid_1.nanoid)(12)}', ${response.answers.map(e => "'" + e.value + "'").join(',')})`;
    logger_1.default.info(sql);
    (await (0, database_1.default)()).query(sql, function (err, result) {
        if (err)
            throw err;
        logger_1.default.info('Data Added', result);
    });
}
exports.addData = addData;
async function getResponses(id) {
    const sql = `SELECT * FROM ${id}`;
    logger_1.default.info(sql);
    const connection = await (0, database_1.default)();
    return await new Promise((resolve, reject) => {
        connection.query(sql, function (err, result) {
            if (err)
                throw err;
            logger_1.default.info('Data Fetched', result);
            console.log(result);
            resolve({ id: id, answers: result });
        });
    });
}
exports.getResponses = getResponses;
//# sourceMappingURL=service.js.map