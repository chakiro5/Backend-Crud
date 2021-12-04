import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  recuperarProductos,
  findProductosByTitle,
  deleteAllProductos,
} from "../slices/productos";
import { Link } from "react-router-dom";

const ProductosList = () => {
  const [currentProducto, setCurrentProducto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  const productos = useSelector(state => state.productos);
  const dispatch = useDispatch();

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const initFetch = useCallback(() => {
    dispatch(recuperarProductos());
  }, [dispatch])

  useEffect(() => {
    initFetch()
  }, [initFetch])

  const refreshData = () => {
    setCurrentProducto(null);
    setCurrentIndex(-1);
  };

  const setActiveProducto = (producto, index) => {
    setCurrentProducto(producto);
    setCurrentIndex(index);
  };

  const removeAllProductos = () => {
    dispatch(deleteAllProductos())
      .then(response => {
        refreshData();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByTitle = () => {
    refreshData();
    dispatch(findProductosByTitle({ title: searchTitle }));
  };

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByTitle}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Lista de Productos </h4>

        <ul className="list-group">
          {productos &&
            productos.map((producto, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveProducto(producto, index)}
                key={index}
              >
                {producto.title}
              </li>
            ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllProductos}
        >
          Remover Todo
        </button>
      </div>
      <div className="col-md-6">
        {currentProducto ? (
          <div>
            <h4>Producto</h4>
            <div>
              <label>
                <strong>Title:</strong>
              </label>{" "}
              {currentProducto.title}
            </div>
            <div>
              <label>
                <strong>Descripcion:</strong>
              </label>{" "}
              {currentProducto.descripcion}
            </div>
            <div>
              <label>
                <strong>Estado:</strong>
              </label>{" "}
              {currentProducto.published ? "Publicado" : "Pendiente"}
            </div>

            <Link
              to={"/productos/" + currentProducto.id}
              className="badge badge-warning"
            >
              Editar
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Por favor presione un Producto...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductosList;
