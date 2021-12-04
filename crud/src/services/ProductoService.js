import http from "../../src/http-commons";

const getAll = () => {
  return http.get("/productos");// me "trae", todos los productos
};

const get = id => {
  return http.get(`/productos/${id}`);//trae producto por id
};

const create = data => {
  return http.post("/productos", data);//crea los productos
};

const update = (id, data) => {
  return http.put(`/productos/${id}`, data);//actualiza los productos
};

const remove = id => {
  return http.delete(`/productos/${id}`);//elimina los productos por id
};

const removeAll = () => {
  return http.delete(`/productos`);//elimina todo
};

const findByTitle = title => {
  return http.get(`/producto?title=${title}`);//busca por id
};

const ProductoService = {getAll,get,create,update,remove,removeAll,findByTitle};

export default ProductoService;

//este archivo, tiene métodos para enviar peticiones HTTP a las Apis.

//creamos un servicio que utiliza el objeto axios para enviar peticiones HTTP.
//El servicio exporta las funciones CRUD y el método finder:

//Llamamos al método axios (importado como http)
//get, post, put, delete correspondiente a las peticiones HTTP: GET, POST, PUT, DELETE 
//para hacer operaciones CRUD.