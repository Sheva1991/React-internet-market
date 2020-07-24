const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_PIZZA_TO_CART': {
            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload]
            }

            const allPizzasAtCart = [].concat.apply([], Object.values(newItems))
            const totalPrice = allPizzasAtCart.reduce((sum, obj) =>
                obj.price + sum, 0
            )
            return {
                ...state,
                items: newItems,
                totalCount: allPizzasAtCart.length,
                totalPrice: totalPrice
            }
        }
        default:
            return state
    }
}

export default cartReducer