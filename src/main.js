"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
const App_1 = require("./App");
require("./index.css");
const typeGuard = (maybeHTMLElement) => {
    return maybeHTMLElement != null;
};
const root = document.getElementById('root');
if (!typeGuard(root))
    throw new Error('No root element found');
client_1.default.createRoot(root).render((0, jsx_runtime_1.jsx)(react_1.default.StrictMode, { children: (0, jsx_runtime_1.jsx)(App_1.App, {}) }));
