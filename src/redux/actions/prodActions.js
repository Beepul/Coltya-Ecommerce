import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchBest = createAsyncThunk('limittoten', async () => {
    const res = await axios.get('https://dummyjson.com/products?limit=10&skip=0'); 
    return res.data.products;
})
export const fetchfeaturedProd = createAsyncThunk('featured', async () => {
    const res = await axios.get('https://dummyjson.com/products?limit=10&skip=11');
    return res.data.products;
})

export const fetchNewProd = createAsyncThunk("new", async () => {
    const res = await axios.get('https://dummyjson.com/products?limit=10&skip=20');
    return res.data.products;
})
export const fetchDiscountedProd = createAsyncThunk('discount', async () => {
    const res = await axios.get('https://dummyjson.com/products?limit=2&skip=30'); 
    return res.data.products;
})

export const fetchAllProd = createAsyncThunk('allproduct', async () => {
    const res = await axios.get('https://dummyjson.com/products?limit=50&skip=0');
    return res.data.products;
})

export const fetchProdbyId = createAsyncThunk('singleProduct', async (id) => {
    const res = await axios.get(`https://dummyjson.com/products/${id}`);
    return res.data
})

export const fetchCatProd = createAsyncThunk('catProd', async (category) => {
    if(category !== 'all'){
        const res = await axios.get(`https://dummyjson.com/products/category/${category}`);
        return res.data.products
    }else{
        const res = await axios.get('https://dummyjson.com/products?limit=50&skip=0');
    return res.data.products;
    }
})

export const fetchSearchedProd = createAsyncThunk('search', async (name) => {
    const res = await axios.get(`https://dummyjson.com/products/search?q=${name}`);
    return res.data.products
})