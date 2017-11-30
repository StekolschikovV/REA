const initialState = [];

function realEstate(store = initialState, action) {
    if (action.type === 'ADD_REAL_ESTATE')
        return [
            ...store,
            action.obj
        ]
    return store
}

export default realEstate