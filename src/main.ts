import { handleUiEvent } from "./events";

async function main(): Promise<void> {
  try {
    await handleUiEvent({
      type: "click",
      x: 100,
      y: 200
    });

    await handleUiEvent({
      type: "submit",
      formId: "loginForm",
      values: {
        username: "Rashel",
        password: "12345"
      }
    });

    await handleUiEvent({
      type: "error",
      message: "Sample error event"
    });

    await handleUiEvent({
      type: "submit",
      formId: "registerForm",
      values: {
        username: "Rashel",
        password: ""
      }
    });
  } catch (error) {
    console.error(
      "Handler failed:",
      error instanceof Error ? error.message : error
    );
  }
}

main();