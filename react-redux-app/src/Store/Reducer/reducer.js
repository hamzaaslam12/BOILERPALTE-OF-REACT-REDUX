const INITIAL_STATE = {
    userName: '',
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'USERNAME' :
            return ({
                ...state,
                userName: action.payload
            })
            
            default:
            return state;
    }

}