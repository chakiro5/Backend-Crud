import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductoDataService from "../services/ProductoService";

const initialState = [];

//crear productos
export const createProducto = createAsyncThunk(
  "productos/create",
  async ({ title, description }) => {
    const res = await ProductoDataService.create({ title, description });
    return res.data;
  }
);

//recuperar productos
export const recuperarProductos = createAsyncThunk(
  "productos/recuperar",
  async () => {
    const res = await ProductoDataService.getAll();
    return res.data;
  }
);

//actualizar productos
export const updateProducto = createAsyncThunk(
  "productos/update",
  async ({ id, data }) => {
    const res = await ProductoDataService.update(id, data);
    return res.data;
  }
);

//elimimar productos
export const deleteProducto = createAsyncThunk(
  "productos/delete",
  async ({ id }) => {
    await ProductoDataService.remove(id);
    return { id };
  }
);
 //eliminar todos los productos
export const deleteAllProductos = createAsyncThunk(
  "productos/deleteAll",
  async () => {
    const res = await ProductoDataService.removeAll();
    return res.data;
  }
);

//hallar productos
export const findProductosByTitle = createAsyncThunk(
  "productos/findByTitle",
  async ({ title }) => {
    const res = await ProductoDataService.findByTitle(title);
    return res.data;
  }
);

const productoSlice = createSlice({
  name: "producto",
  initialState,
  extraReducers: {
    [createProducto.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [recuperarProductos.fulfilled]: (state, action) => {
      return [...action.payload];
    },
    [updateProducto.fulfilled]: (state, action) => {
      const index = state.findIndex(producto => producto.id === action.payload.id);
      state[index] = {
        ...state[index],
        ...action.payload,
      };
    },
    [deleteProducto.fulfilled]: (state, action) => {
      let index = state.findIndex(({ id }) => id === action.payload.id);
      state.splice(index, 1);
    },
    [deleteAllProductos.fulfilled]: (state, action) => {
      return [];
    },
    [findProductosByTitle.fulfilled]: (state, action) => {
      return [...action.payload];
    },
  },
});

const { reducer } = productoSlice;
export default reducer;
