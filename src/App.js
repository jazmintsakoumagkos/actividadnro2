import React, { useState, useEffect } from 'react';
import './App.css';


const Spinner = () => {
  return <div className="spinner">Cargando...</div>;
};


const TablaProductos = ({ productos }) => {
  return (
    <table className="tabla">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Categoría</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => (
          <tr key={producto.id}>
            <td>{producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>{producto.categoria}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


const FormularioProducto = ({ agregarProducto }) => {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [categoria, setCategoria] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre && precio && categoria) {
      agregarProducto({ id: Date.now(), nombre, precio: parseInt(precio), categoria });
      setNombre('');
      setPrecio('');
      setCategoria('');
    }
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre del Producto"
      />
      <input
        type="number"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
        placeholder="Precio"
      />
      <input
        type="text"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
        placeholder="Categoría"
      />
      <button type="submit">Agregar Producto</button>
    </form>
  );
};


const App = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProductos([
        { id: 1, nombre: "Auriculares Inalámbricos", precio: 120, categoria: "Electrónica" },
        { id: 2, nombre: "Silla de Escritorio", precio: 300, categoria: "Muebles" },
        { id: 3, nombre: "Cafetera Espresso", precio: 250, categoria: "Electrodomésticos" },
        { id: 4, nombre: "Juego de Mesa - Monopoly", precio: 50, categoria: "Juguetes" },
        { id: 5, nombre: "Libro de Programación en JavaScript", precio: 35, categoria: "Libros" }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const agregarProducto = (producto) => {
    setProductos([...productos, producto]);
  };

  return (
    <div className="App">
      <h1>Lista de Productos</h1>
      {loading ? <Spinner /> : <TablaProductos productos={productos} />}
      <FormularioProducto agregarProducto={agregarProducto} />
    </div>
  );
};

export default App;