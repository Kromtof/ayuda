import React from "react";
import { useState } from "react";

export const ProductoComponent = (props) => {
  return (
    <tr key={props.item.id}>
      <td>{props.item.id}</td>

      <td>{props.item.name}</td>

      <td>{props.item.price} $</td>
      <td>
        <input
          type="number"
          onChange={(event) =>
            event.target.value > "0"
              ? props.agregaritemlista(props.item, event.target.value)
              : props.eliminaritemlista(props.item)
          }
        />
      </td>
    </tr>
  );
};

{
  /*<input
          type="checkbox"
          checked={props.listaitemscheckeados.some(
            (itemcheckeado) => itemcheckeado.id === props.item.id
          )}
          onChange={(event) =>
            event.target.checked
              ? props.agregaritemlista(props.item)
              : props.eliminaritemlista(props.item)
          }
        />*/
}
