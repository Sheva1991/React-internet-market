
const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0)

const _get = (obj, path) => {
    const [firstKey, ...keys] = path.split('.')
    return keys.reduce((val, key) => {
        return val[key]
    }, obj[firstKey])
}

const getTotalSum = (obj, path) => {
    return Object.values(obj).reduce(
        (sum, obj) => {
            const value = _get(obj, path)
            return sum + value
        },
        0)
}

function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_PIZZA_TO_CART': {
            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload]
            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems)
                }
            }

            // const totalCount = Object.keys(newItems).reduce((sum, key) => newItems[key].items.length + sum, 0)
            // const totalPrice = Object.keys(newItems).reduce((sum, key) => newItems[key].totalPrice + sum, 0)

            const totalCount = getTotalSum(newItems, 'items.length')
            const totalPrice = getTotalSum(newItems, 'totalPrice')
            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice: totalPrice
            }
        }
        case 'CLEAR_CART': {
            return {
                items: {},
                totalPrice: 0,
                totalCount: 0
            }
        }
        case 'REMOVE_CART_ITEM': {
            const newItems = {
                ...state.items
            }
            const currentTotalPrice = newItems[action.payload].totalPrice
            const currentTotalCount = newItems[action.payload].items.length
            delete newItems[action.payload]
            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount,
            }
        }
        case 'PLUS_CART_ITEM': {
            const newObjectItems = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0],
            ]

            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjectItems,
                    totalPrice: getTotalPrice(newObjectItems)
                }
            }

            const totalCount = getTotalSum(newItems, 'items.length')
            const totalPrice = getTotalSum(newItems, 'totalPrice')
            return {
                ...state,
                items: newItems,
                totalPrice,
                totalCount
            }
        }
        case 'MINUS_CART_ITEM': {
            const oldItems = state.items[action.payload].items
            const newObjectItems = oldItems.length > 1 ?
                state.items[action.payload].items.slice(1) : oldItems

            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjectItems,
                    totalPrice: getTotalPrice(newObjectItems)
                }
            }

            const totalCount = getTotalSum(newItems, 'items.length')
            const totalPrice = getTotalSum(newItems, 'totalPrice')

            return {
                ...state,
                items: newItems,
                totalPrice,
                totalCount
            }
        }
        default:
            return state
    }
}

export default cartReducer