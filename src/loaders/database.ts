import * as mysql from "mysql";
import config from "../config";
import LoggerInstance from "./logger";

let connection: mysql.Connection;

function initializeDatabase() {
  connection = mysql.createConnection({
    host     : config.rdsHost,
    user     : config.rdsUsername,
    password : config.rdsPassword,
    port     : config.rdsPort,
    database : config.rdsName
  })
}

export default async (): Promise<mysql.Connection> => {
  if (!connection) {
    initializeDatabase();
    connection.connect(function(err) {
      if (err) {
        LoggerInstance.error('Database connection failed: ' + err.stack);
        return;
      }
      LoggerInstance.info("Connection Created");
    })
  }

  return connection;
};