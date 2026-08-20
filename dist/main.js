"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("./events");
async function main() {
    try {
        await (0, events_1.handleUiEvent)({
            type: "click",
            x: 100,
            y: 200
        });
        await (0, events_1.handleUiEvent)({
            type: "submit",
            formId: "loginForm",
            values: {
                username: "Rashel",
                password: "12345"
            }
        });
        await (0, events_1.handleUiEvent)({
            type: "error",
            message: "Sample error event"
        });
        await (0, events_1.handleUiEvent)({
            type: "submit",
            formId: "registerForm",
            values: {
                username: "Rashel",
                password: ""
            }
        });
    }
    catch (error) {
        console.error("Handler failed:", error instanceof Error ? error.message : error);
    }
}
main();
//# sourceMappingURL=main.js.map