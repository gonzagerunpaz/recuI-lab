const validaciones = {
  stock: (producto, values) => producto.stock > values,
  precio: (producto, values) => producto.precio <= values,
  nombre: (producto, values) => producto.nombre.lenght < values,
  categoria: (producto, values) => {
    return Array.isArray(values) && values.includes(producto.categorias);
  },
};

const makeFilter = ({ fn, values }) => {
  if (!validaciones[fn]) throw new Error("Funcion inexistente");
  return (producto) => validaciones[fn](producto, values);
};

module.exports = makeFilter;
