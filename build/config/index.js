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
const dotenv = __importStar(require("dotenv"));
dotenv.config();
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
exports.default = {
    /**
     * Port the app should run on
     */
    port: parseInt(process.env.PORT) || 5050,
    /**
     * Database the app should connect to
     */
    rdsUsername: process.env.RDS_USERNAME,
    rdsHost: process.env.RDS_HOSTNAME,
    rdsPort: parseInt(process.env.RDS_PORT) || 3306,
    rdsName: process.env.RDS_NAME,
    rdsPassword: process.env.RDS_PASSWORD,
    /**
     * The secret sauce to validate JWT
     */
    jwtSecret: process.env.JWT_SECRET,
    /**
     * Used by Winston logger
     */
    logs: {
        level: process.env.LOG_LEVEL || 'silly',
    },
    /**
     * API configs
     */
    api: {
        prefix: '/api',
    },
};
//# sourceMappingURL=index.js.map