'use client'
import React, { useReducer } from "react"

export const CartContext = React.createContext()


function CartContextProvider({ children }) {

    // const { isUser } = React.useContext(AuthContext)

    function cartFunction(state, action) {
        switch (action.type) {
            case "setCart": {
                return action.data
            }
            case "add":
                return add(action, state)
            case "sub":
                return sub(action, state)
            case "addToCart":
                return addToCart(action, state)
            case "clearCart":
                return clearCart()
            default:
                return state
        }

    }


    function add(action, state) {
        // const itemInCart = state.find((i) => i.id === action.id)
        // if (itemInCart) {
        //     return state.map(map => map.id === action.id ? { ...map, quantity: map.quantity + 1 } : map)
        // }
        return state.map(map => {
            if (map.id === action.id) {
                return { ...map, quantity: map.quantity + 1 }
            }
            return map
        })
    }

    function sub(action, state) {
        // const itemInCart = state.find((i) => i.id === action.id)
        // if (itemInCart) {
        //     return localState.map(map => map.id === action.id ? { ...map, quantity: map.quantity - 1 } : map)
        // }
        return state.map(map => {
            if (map.id === action.id) {
                return { ...map, quantity: map.quantity - 1 }
            }
            return map
        })
    }

    function addToCart(action, state) {
        const itemInCart = state?.find((i) => i.id === action.id)
        if (!itemInCart) {
            return [...state, { id: action.id, quantity: 1, price: action.price, name: action.name, slug: action.slug }]
        }

        // return state.map(map => {
        //     if (!(map.id === action.id)) {
        //         return [...state, { id: action.id, quantity: 1 }]
        //     }
        //     return map
        // })
    }

    function clearCart(action, state) {
        localStorage.clear();
    }



    // const [cart, dispatch] = useReducer(cartFunction, [])
    const localState = JSON.parse(localStorage.getItem("cart"));

    const [cart, dispatch] = useReducer(cartFunction, localState || [])

    React.useEffect(() => {
        // dispatch({
        //     type: "setCart",
        //     data: localState
        // })

        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (

        < CartContext.Provider value={{ data: cart, dispatch }
        }>
            {children}
        </CartContext.Provider >
    )
}

export default CartContextProvider