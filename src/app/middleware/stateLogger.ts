export function stateLogger(state) {
    return state.do(s => console.log('NEW STATE', s));
} 