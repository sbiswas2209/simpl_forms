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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = __importStar(require("mysql"));
const config_1 = __importDefault(require("../config"));
const logger_1 = __importDefault(require("./logger"));
let connection;
function initializeDatabase() {
    connection = mysql.createConnection({
        host: config_1.default.rdsHost,
        user: config_1.default.rdsUsername,
        password: config_1.default.rdsPassword,
        port: config_1.default.rdsPort,
        database: config_1.default.rdsName
    });
}
exports.default = async () => {
    if (!connection) {
        initializeDatabase();
        connection.connect(function (err) {
            if (err) {
                logger_1.default.error('Database connection failed: ' + err.stack);
                return;
            }
            logger_1.default.info("Connection Created");
        });
    }
    return connection;
};
//# sourceMappingURL=database.js.map