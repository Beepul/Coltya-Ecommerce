import { createSlice, current } from '@reduxjs/toolkit'
import { fetchAllProd, fetchBest, fetchCatProd, fetchDiscountedProd, fetchfeaturedProd, fetchNewProd, fetchProdbyId, fetchSearchedProd } from '../actions/prodActions'

const initialState = {
    isLoading: false,
    showCat: false,
    showFiltered:false,
    showAll:false,
    newProd:[],
    limitToten: [],
    feturedProds: [],
    discountProd:[],
    catProd:[],
    filteredByPrice:[],
    allProds: [],
    singleProd: [],
    error: {}
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        shopStateChanger : (state) =>{
            state.showCat = false;
        },
        filterByPrice: (state,action) => {
            // console.log("herer",action.payload)
            // console.log(current(state.allProds))
            const cat = current(state.catProd)
            const all = current(state.allProds)
            if(cat.length > 0){
                const data = cat.filter((items)=> {
                    return items.discountedPrice > action.payload[0] && items.discountedPrice < action.payload[1]
                })
                state.showFiltered = true;
                state.filteredByPrice = data
            }else{
                const data = all.filter((items)=> {
                    return items.discountedPrice > action.payload[0] && items.discountedPrice < action.payload[1]
                })
                state.showFiltered = true;
                state.filteredByPrice = data
            }
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchDiscountedProd.pending, (state)=>{
            state.loading = true;
        })
        .addCase(fetchDiscountedProd.fulfilled, (state,action) => {
            state.loading = false;
            const data = action.payload.map((item) => {
                const actualPrice = Math.ceil(item.price-item.price/item.discountPercentage)
                return {...item,
                discountedPrice : actualPrice}
            })
            state.discountProd = data
        })
        .addCase(fetchDiscountedProd.rejected, (state,action) => {
            state.loading= false;
            state.error = action.payload
        })
        .addCase(fetchNewProd.pending, (state)=>{
            state.loading = true;
        })
        .addCase(fetchNewProd.fulfilled, (state,action) => {
            state.loading = false;
            const data = action.payload.map((item) => {
                const actualPrice = Math.ceil(item.price-item.price/item.discountPercentage)
                return {...item,
                discountedPrice : actualPrice}
            })
            state.newProd = data
        })
        .addCase(fetchNewProd.rejected, (state,action) => {
            state.loading= false;
            state.error = action.payload
        })
            .addCase(fetchBest.pending, (state)=>{
                state.loading = true;
            })
            .addCase(fetchBest.fulfilled, (state,action) => {
                state.loading = false;
                const data = action.payload.map((item) => {
                    const actualPrice = Math.ceil(item.price-item.price/item.discountPercentage)
                    return {...item,
                    discountedPrice : actualPrice}
                })
                state.limitToten = data
            })
            .addCase(fetchBest.rejected, (state,action) => {
                state.loading= false;
                state.error = action.payload
            })
            .addCase(fetchfeaturedProd.pending, (state)=>{
                state.loading = true;
            })
            .addCase(fetchfeaturedProd.fulfilled, (state,action) => {
                state.loading = false;
                const data = action.payload.map((item) => {
                    const actualPrice = Math.ceil(item.price-item.price/item.discountPercentage)
                    return {...item,
                    discountedPrice : actualPrice}
                })
                state.feturedProds = data
          
            })
            .addCase(fetchfeaturedProd.rejected, (state,action) => {
                state.loading= false;
                state.error = action.payload
            })
            .addCase(fetchAllProd.pending, (state)=>{
                state.loading = true;
            })
            .addCase(fetchAllProd.fulfilled, (state,action) => {
                state.loading = false;
                const data = action.payload.map((item) => {
                    const actualPrice = Math.ceil(item.price-item.price/item.discountPercentage)
                    return {...item,
                    discountedPrice : actualPrice}
                })
                state.showAll = true;
                state.showCat = false;
                state.showFiltered = false;
                state.showProd = data;
                state.allProds = data;
            })
            .addCase(fetchAllProd.rejected, (state,action) => {
                state.loading= false;
                state.error = action.payload
            })
            .addCase(fetchProdbyId.pending, (state)=>{
                state.loading = true;
            })
            .addCase(fetchProdbyId.fulfilled, (state,action) => {
                state.loading = false;
                const actualPrice = Math.ceil(action.payload.price-action.payload.price/action.payload.discountPercentage) 
                let products = action.payload
                products["discountedPrice"] = actualPrice;
                state.singleProd = products;
            })
            .addCase(fetchProdbyId.rejected, (state,action) => {
                state.loading= false;
                state.error = action.payload
            })
            .addCase(fetchCatProd.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCatProd.fulfilled, (state,action) => {
                state.loading = false;
                const data = action.payload.map((item) => {
                    const actualPrice = Math.ceil(item.price-item.price/item.discountPercentage)
                    return {...item,
                    discountedPrice : actualPrice}
                })
                state.catProd = data;
                state.showAll = false;
                state.showFiltered = false;
                state.showCat = true;
            })
            .addCase(fetchCatProd.rejected, (state,action) => {
                state.loading = false;
                state.loading = action.payload;
            })
            .addCase(fetchSearchedProd.pending, (state,action) => {
                state.loading = true;
            })
            .addCase(fetchSearchedProd.fulfilled, (state,action) => {
                state.loading = false;
                const data = action.payload.map((item) => {
                    const actualPrice = Math.ceil(item.price-item.price/item.discountPercentage)
                    return {...item,
                    discountedPrice : actualPrice}
                })
                state.catProd = data;
                state.showCat = true;
            })
            .addCase(fetchSearchedProd.rejected, (state,action) => {
                state.loading = false;
                state.error = action.payload;
                console.log(state.error)
            })
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { shopStateChanger,filterByPrice } = productSlice.actions
  
  export default productSlice.reducer