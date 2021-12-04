import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProducto } from "../slices/productos";

const AddProducto = () => {
  const initialProductoState = {
    id: null,
    title: "",
    description: "",
    published: false
  };
  const [producto, setProducto] = useState(initialProductoState);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setProducto({ ...producto, [name]: value });
  };

  const saveProducto = () => {
    const { title, description } = producto;

    dispatch(createProducto({ title, description }))
      .unwrap()
      .then(data => {
        console.log(data);
        setProducto({
          id: data.id,
          title: data.title,
          description: data.description,
          published: data.published
        });
        setSubmitted(true);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newProducto = () => {
    setProducto(initialProductoState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newProducto}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={producto.title || ''}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={producto.description || ''}
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <button onClick={saveProducto} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddProducto;
