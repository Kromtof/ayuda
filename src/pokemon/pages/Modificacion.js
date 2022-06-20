import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { httpClient } from "../services/httpClient";
import { useNavigate } from "react-router-dom";

// httpClient.put({id: 1, name: 'carlos', type: 'caca'}, 1)

export const ModificacionPage = () => {
  const params = useParams();
  const [pokemon, setPokemon] = useState(undefined);

  const [idstate, setidstate] = useState();
  const [namestate, setnamestate] = useState();
  const [typestate, settypestate] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const prom = httpClient.get(Number(params.id));
    prom.then((data) => {
      setPokemon(data);
      setidstate(data.id);
      setnamestate(data.name);
      settypestate(data.type);
    });
  }, []);

  if (pokemon === undefined) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      Cambiar parámetros de: {pokemon.name}
      <form
        onSubmit={(event) => {
          const promModify = httpClient.put(
            { id: idstate, name: namestate, type: typestate },
            pokemon.id
          );
          promModify.then(() => {
            navigate("/");
          });
        }}
      >
        <input
          type="number"
          value={idstate}
          onChange={(event) => setidstate(event.target.value)}
          required
        />

        <input
          type="text"
          value={namestate}
          onChange={(event) => setnamestate(event.target.value)}
        />

        <input
          type="text"
          value={typestate}
          onChange={(event) => settypestate(event.target.value)}
        />
        <button type="submit">Aplicar</button>
      </form>
    </div>
  );
};
