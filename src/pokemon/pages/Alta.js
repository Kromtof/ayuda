import { httpClient } from "../services/httpClient";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * httpClient.post({name: 'nombre', id: 1, type: 'plant' })
 */

function FavoritesPage() {
  const navigate = useNavigate();

  const [idstate, setidstate] = useState();
  const [namestate, setnamestate] = useState();
  const [typestate, settypestate] = useState();

  return (
    <div>
      <h1> Formulario </h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const promAdd = httpClient.post({
            id: idstate,
            name: namestate,
            type: typestate,
          });
          promAdd.then(() => {
            navigate("/");
          });
        }}
      >
        <input
          type="number"
          placeholder="id"
          value={idstate}
          onChange={(event) => setidstate(event.target.value)}
          required
        />
        <input
          type="text"
          placeholder="name"
          value={namestate}
          required
          onChange={(event) => setnamestate(event.target.value)}
        />
        <input
          type="text"
          placeholder="type"
          value={typestate}
          onChange={(event) => settypestate(event.target.value)}
          required
        />

        <button type="submit">Agregar Pokemon</button>
      </form>
    </div>
  );
}

export default FavoritesPage;
