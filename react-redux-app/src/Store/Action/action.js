
export function changeUserName(name) {
    return dispatch => {
        dispatch({ type: 'USERNAME', payload: name })
    }
}
