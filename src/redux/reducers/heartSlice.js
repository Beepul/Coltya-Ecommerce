import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState = {
    isLoading: false,
    favList:[],
    quantity: 0,
    // totalAmount: 0,
}

export const heartSlice = createSlice({
    name: 'heart',
    initialState,
    reducers: {
        addToheart: (state,action) => {
            const existingItem = state.favList.find(item => {
                return item.id === action.payload.id;
            })
            if(!existingItem){
                state.favList = [...state.favList, {...action.payload, quantity: 1 , finalAmount : action.payload.discountedPrice }]
                toast.success(`${action.payload.title} has been added to your fav list`,{
                    position: "top-right"
                })    
            }else{
                        state.favList = state.favList.map((item)=> {
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
            // if(action.payload.discountedPrice){
            //     state.totalAmount += action.payload.discountedPrice 
            // }else{
            //     state.totalAmount +=  action.payload.price 
            // }
        },
        removeFromHeart: (state,action) => {
            const productId = action.payload.id;
            const isExisting = state.favList.findIndex( item => {
                return item.id === productId
            })
            if(isExisting !== -1){
                state.favList.splice(isExisting,1);
                toast.warning(`${action.payload.title} has been removed from the fav list`,{
                    position: "top-right"
                })
            }
            state.quantity -= action.payload.quantity;
            // state.totalAmount -= action.payload.discountedPrice;
        },
        // increaseHeartQuantity : (state, action) => {
        //     console.log(action.payload)
        //     const productId = action.payload.id;
        //     const isExisting = state.favList.findIndex(item => {
        //         return item.id === productId
        //     })
        //     if(isExisting !== -1){
        //         state.favList[isExisting].quantity +=1;
        //         state.favList[isExisting].finalAmount += state.favList[isExisting].discountedPrice;
        //         // state.totalAmount = state.totalAmount + state.cart[isExisting].discountedPrice;
        //         state.quantity++;
        //     }
        // },
        // decreaseHeartQuantity: (state, action) => {
        //     const productId = action.payload.id;
        //     const isExisting = state.favList.findIndex(item => {
        //         return item.id === productId
        //     })
        //     if(isExisting !== -1){
        //         const currentItem = state.favList[isExisting];
        //         if(currentItem.quantity === 1){
        //             state.favList.splice(isExisting,1);
        //             state.quantity -= action.payload.quantity 
        //             // state.totalAmount -= action.payload.discountedPrice

        //         }else{
        //             state.favList[isExisting].quantity -= 1;
        //             state.favList[isExisting].finalAmount -= state.favList[isExisting].discountedPrice
        //             // state.totalAmount = state.totalAmount - state.cart[isExisting].discountedPrice
        //             state.quantity--;
        //         }
        //     }
        // },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { 
    addToheart,
    removeFromHeart,
    // increaseHeartQuantity,
    // decreaseHeartQuantity,
} = heartSlice.actions
  
  export default heartSlice.reducer