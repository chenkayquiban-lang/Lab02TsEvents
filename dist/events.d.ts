export type UiEvent = {
    type: "click";
    x: number;
    y: number;
} | {
    type: "submit";
    formId: string;
    values: Record<string, string>;
} | {
    type: "error";
    message: string;
};
export type Handler<E> = (event: E) => void | Promise<void>;
export declare function handleUiEvent(event: UiEvent): Promise<void>;
//# sourceMappingURL=events.d.ts.map