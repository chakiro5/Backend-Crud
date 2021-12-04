import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateProducto, deleteProducto } from "../slices/productos";
import ProductoDataService from "../services/ProductoService";

const Producto = (props) => {
  const initialProductoState = {
    id: null,
    title: "",
    description: "",
    published: false
  };
  const [currentProducto, setCurrentProducto] = useState(initialProductoState);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const getProducto = id => {
    ProductoDataService.get(id)
      .then(response => {
        setCurrentProducto(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getProducto(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentProducto({ ...currentProducto, [name]: value });
  };

  const updateStatus = status => {
    const data = {
      id: currentProducto.id,
      title: currentProducto.title,
      description: currentProducto.description,
      published: status
    };

    dispatch(updateProducto({ id: currentProducto.id, data }))
      .unwrap()
      .then(response => {
        console.log(response);
        setCurrentProducto({ ...currentProducto, published: status });
        setMessage("El Estado fue actualizado correctamente!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateContent = () => {
    dispatch(updateProducto({ id: currentProducto.id, data: currentProducto }))
      .unwrap()
      .then(response => {
        console.log(response);
        setMessage("El Producto fue actualizado correctamente!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const removeProducto = () => {
    dispatch(deleteProducto({ id: currentProducto.id }))
      .unwrap()
      .then(() => {
        props.history.push("/productos");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentProducto ? (
        <div className="edit-form">
          <h4>Producto</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentProducto.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentProducto.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentProducto.published ? "Publicado" : "Pendiente"}
            </div>
          </form>

          {currentProducto.published ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updateStatus(false)}
            >
              Sin Publicar
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updateStatus(true)}
            >
              Publicado
            </button>
          )}

          <button className="badge badge-danger mr-2" onClick={removeProducto}>
            Eliminar
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateContent}
          >
            Actualizar
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please presione en un Producto...</p>
        </div>
      )}
    </div>
  );
};

export default Producto;
