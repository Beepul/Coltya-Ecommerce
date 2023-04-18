import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState = {
    isLoading: false,
    cart:[],
    quantity: 0,
    totalAmount: 0,
    deliveryCharge: 100,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addTocart: (state,action) => {
            const existingItem = state.cart.find(item => {
                return item.id === action.payload.id;
            })
            if(!existingItem){
                state.cart = [...state.cart, {...action.payload, quantity: 1 , finalAmount : action.payload.discountedPrice }]
                toast.success(`${action.payload.title} has been added to the cart`,{
                    position: "top-right"
                })    
            }else{
                        state.cart = state.cart.map((item)=> {
                            if(item.id === action.payload.id){
                                toast.info(`${action.payload.title}'s quantity has been increased`,{
                                    position: "top-right"
                                })
                                return {...item, quantity: item.quantity + 1 , finalAmount : item.finalAmount + item.finalAmount};
                            }else{
                                return item
                            }
                        })
                    }
            state.quantity++;
            if(action.payload.discountedPrice){
                state.totalAmount += action.payload.discountedPrice 
            }else{
                state.totalAmount +=  action.payload.price 
            }
        },
        removeFromCart: (state,action) => {
            const productId = action.payload.id;
            const isExisting = state.cart.findIndex( item => {
                return item.id === productId
            })
            if(isExisting !== -1){
                state.cart.splice(isExisting,1);
                toast.warning(`${action.payload.title} has been removed from the cart`,{
                    position: "top-right"
                })
            }
            state.quantity -= action.payload.quantity;
            state.totalAmount -= action.payload.finalAmount;
        },
        increaseQuantity: (state, action) => {
            const productId = action.payload.id;
            const isExisting = state.cart.findIndex(item => {
                return item.id === productId
            })
            if(isExisting !== -1){
                state.cart[isExisting].quantity +=1;
                state.cart[isExisting].finalAmount += state.cart[isExisting].discountedPrice;
                state.totalAmount = state.totalAmount + state.cart[isExisting].discountedPrice;
                state.quantity++;
            }
        },
        decreaseQuantity: (state, action) => {
            const productId = action.payload.id;
            const isExisting = state.cart.findIndex(item => {
                return item.id === productId
            })
            if(isExisting !== -1){
                const currentItem = state.cart[isExisting];
                if(currentItem.quantity === 1){
                    state.cart.splice(isExisting,1);
                    state.quantity -= action.payload.quantity 
                    state.totalAmount -= action.payload.discountedPrice

                }else{
                    state.cart[isExisting].quantity -= 1;
                    state.cart[isExisting].finalAmount -= state.cart[isExisting].discountedPrice
                    state.totalAmount = state.totalAmount - state.cart[isExisting].discountedPrice
                    state.quantity--;
                }
            }
        },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { addTocart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    getGrandTotal,
} = cartSlice.actions
  
  export default cartSlice.reducer