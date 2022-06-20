import { httpClient } from "../services/httpClient";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function AllMeetupsPage() {
  const navigate = useNavigate();
  const [pokemones, setPokemones] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadPokemones = () => {
    setIsLoading(true);
    const prom = httpClient.get();
    prom.then((data) => {
      setIsLoading(false);
      setPokemones(data);
    });
  };

  useEffect(() => {
    loadPokemones();
  }, []);

  return (
    <div>
      <div>{isLoading ? "Cargando..." : "No cargando..."}</div>
      {
        <table>
          <tr>
            <th>ID</th>
            <th>NOMBRE</th>
            <th>TIPO</th>
            <th>ACCION</th>
          </tr>

          {pokemones.map((pokemon) => (
            <tr key={pokemon.id}>
              <td>{pokemon.id}</td>
              <td>{pokemon.name}</td>
              <td>{pokemon.type}</td>
              <td>
                <button
                  onClick={() => {
                    const promDelete = httpClient.delete(pokemon.id);
                    promDelete.then(() => {
                      loadPokemones();
                    });
                  }}
                >
                  Extinguir
                </button>
                <button
                  onClick={() => {
                    navigate("/modificacion/" + pokemon.id);
                  }}
                >
                  Modificar
                </button>
              </td>
            </tr>
          ))}
        </table>
      }

      {/*<div>
        <label htmlFor="eliminar">Elige un pokemon:</label>
        <select name="eliminar" form="pokemon-form"></select>
        <button>EXTINGUIR</button>
    </div> */}
    </div>
  );
}
