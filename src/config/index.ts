import * as dotenv from "dotenv";
dotenv.config()

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

export default {
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
