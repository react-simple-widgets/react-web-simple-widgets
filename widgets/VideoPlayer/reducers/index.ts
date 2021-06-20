import player from "./player";
import operation from "./operation";

export default function (state = {} as any, action) {
    return {
        player: player(state.player, action),
        operation: operation(state.operation, action)
    };
}

export const playerReducer = player;
export const operationReducer = operation;
