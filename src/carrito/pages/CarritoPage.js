import React from "react";
import { ItemCarritoComponent } from "../components/ItemCarritoComponent";
import { useState } from "react";
import { useEffect } from "react";
import { ProductoComponent } from "../components/ProductoComponent";

const items = [
  { id: 1, name: "Shampoo", price: 200, qty: 0 },
  { id: 2, name: "Axie", price: 20, qty: 0 },
  { id: 3, name: "Hoodie", price: 150, qty: 0 },
  { id: 4, name: "Rastrillo", price: 100, qty: 0 },
  { id: 5, name: "Perfume", price: 300, qty: 0 },
];

export const CarritoPage = () => {
  const [listaitemscheckeados, setListaitemscheckeados] = useState([]);

  function agregaritemlista(item, cantidad) {
    let listafiltrada = listaitemscheckeados.filter(
      (icheckeado) => icheckeado.id !== item.id
    );
    item.qty = cantidad;

    setListaitemscheckeados([...listafiltrada, item]);
  }

  function eliminaritemlista(item) {
    let listafiltrada = listaitemscheckeados.filter(
      (icheckeado) => icheckeado.id !== item.id
    );
    setListaitemscheckeados(listafiltrada);
  }

  const calcularTotal = () => {
    let preciofinal = 0;
    listaitemscheckeados.forEach((icheckeado) => {
      preciofinal = preciofinal + icheckeado.price * icheckeado.qty;
    });
    return preciofinal;
  };

  return (
    <div>
      <div>
        <h1>Tatú Carrito</h1>

        <table>
          <tr>
            <th>ID</th>
            <th>NOMBRE</th>
            <th>PRECIO</th>
            <th>AGREGAR</th>
          </tr>

          {items.map((item) => (
            <ProductoComponent
              key={item.id}
              item={item}
              listaitemscheckeados={listaitemscheckeados}
              agregaritemlista={agregaritemlista}
              eliminaritemlista={eliminaritemlista}
            />
          ))}
        </table>
        <h1>Dentro del Carrito</h1>
      </div>

      {listaitemscheckeados.map((itemInCarrito) => (
        //<div }> a </div>
        <ItemCarritoComponent
          key={itemInCarrito.id}
          id={itemInCarrito.id}
          item={itemInCarrito}
        />
      ))}
      <div>TOTAL: {calcularTotal(listaitemscheckeados)}</div>
    </div>
  );
};
