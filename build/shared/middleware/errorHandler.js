"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lastRoute = exports.errorHandler = void 0;
//Error Handling Middleware
const errorHandler = (error, req, res) => {
    const status = error.statusCode || 500;
    const message = error.message || 'Something Wrong Happened';
    res.status(status).json({ success: false, message });
};
exports.errorHandler = errorHandler;
//Middleware that handles the request to Not Defined Endpoints
const lastRoute = (_req, res) => {
    res.status(404).json({ success: false, message: 'Endpoint Not Found' });
};
exports.lastRoute = lastRoute;
//# sourceMappingURL=errorHandler.js.map