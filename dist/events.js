"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleUiEvent = handleUiEvent;
async function handleUiEvent(event) {
    switch (event.type) {
        case "click":
            console.log(`click @ ${event.x},${event.y}`);
            break;
        case "submit":
            await new Promise((r) => setTimeout(r, 200));
            if (!Object.values(event.values).every(Boolean)) {
                throw new Error("Validation failed");
            }
            console.log("submitted", event.formId);
            break;
        case "error":
            console.error(event.message);
            break;
    }
}
//# sourceMappingURL=events.js.map