import { Route, Routes } from "react-router-dom";
import React from "react";
import { AllMeetupsPage as ListadoPokemonPage } from "./pokemon/pages/ListadoPokemon";
import AltaPage from "./pokemon/pages/Alta";
import { MainNavigation } from "./layout/MainNavigation";
import { ModificacionPage } from "./pokemon/pages/Modificacion";
import { CarritoPage } from "./carrito/pages/CarritoPage";
function App() {
  return (
    <div>
      <MainNavigation>
        <div>Formulario</div>
      </MainNavigation>
      <Routes>
        <Route path="/" element={<ListadoPokemonPage />} />
        <Route path="/alta" element={<AltaPage />} />
        <Route path="/modificacion/:id" element={<ModificacionPage />} />
        <Route path="/carrito" element={<CarritoPage />} />
      </Routes>
    </div>
  );
}

export default App;
