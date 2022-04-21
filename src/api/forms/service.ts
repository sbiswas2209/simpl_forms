import { nanoid } from 'nanoid';
import database from '../../loaders/database';
import LoggerInstance from '../../loaders/logger';
import { CreateForm, Field, FormResponse } from './model';

export async function createForm(formDetails: CreateForm): Promise<string> {
  const id = nanoid(6);
  const sql = `CREATE TABLE ${id} (id VARCHAR(255) PRIMARY KEY, ${formDetails.fields
    .map(e => e.name + ' ' + e.type)
    .join(',')})`;
  LoggerInstance.info(sql);
  (await database()).query(sql, function (err, result) {
    if (err) throw err;
    LoggerInstance.info('Table created', result);
  });
  return id;
}

export async function getFormFields(id: string): Promise<Field[]> {
  const sql = `SELECT * FROM INFORMATION_SCHEMA.COLUMNS
  WHERE TABLE_NAME = N'${id}'
  `;
  const data = [];
  LoggerInstance.info(sql);
  const connection = await database();
  await new Promise((resolve, _reject) => {
    connection.query(sql, function (err, result) {
      if (err) throw err;
      LoggerInstance.info('Table Data fetched');
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

export async function addData(response: FormResponse): Promise<void> {
  const sql = `INSERT INTO ${response.id} (id, ${response.answers.map(e => e.name).join(',')}) VALUES ('${nanoid(
    12,
  )}', ${response.answers.map(e => "'" + e.value + "'").join(',')})`;
  LoggerInstance.info(sql);
  (await database()).query(sql, function (err, result) {
    if (err) throw err;
    LoggerInstance.info('Data Added', result);
  });
}

export async function getResponses(id: string): Promise<FormResponse> {
  const sql = `SELECT * FROM ${id}`;
  LoggerInstance.info(sql);
  const connection = await database();
  return await new Promise((resolve, reject) => {
    connection.query(sql, function (err, result) {
      if (err) throw err;
      LoggerInstance.info('Data Fetched', result);
      console.log(result);
      resolve({id: id, answers: result});
    });
  });
}
