import axios from "axios";


//Este archivo,inicializa axios con la Url base HTTP y las cabeceras.
export default axios.create({
  //baseURL:cluster0.ra0wk.mongodb.net
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});