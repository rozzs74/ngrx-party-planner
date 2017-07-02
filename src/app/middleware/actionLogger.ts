
export function actionLogger(action) {
    return action.do(a => console.log('Dispatched action', a))
}
