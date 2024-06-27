
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WavyContainer } from "react-wavy-transitions";
import { PaginaPrincipal } from "./PaginaPrincipal";
import { Tienda } from "./TiendaFiles/Tienda";
import { FinalizarPedido } from "./tienda/FinalizarPedido";
import { Tienda2 } from "./TiendaFiles/Tienda2";
import { AvisoLegal } from "./AvisoLegal";
import { Tienda3 } from "./TiendaFiles/Tienda3";
import { Tienda3Hybrid } from "./TiendaFiles/Tienda3Hybrid";
import { Tienda3HybridMetallic } from "./TiendaFiles/Tienda3HybridMetallic";
import { Tienda3Muebles} from "./TiendaFiles/Tienda3Muebles";
import { Tienda3Barnices } from "./TiendaFiles/Tienda3Barnices";
import { Tienda3Cosmos } from "./TiendaFiles/Tienda3Cosmos";
import { Tienda3Ambientes } from "./TiendaFiles/Tienda3Ambientes";
import { Tienda3Stencils } from "./TiendaFiles/Tienda3Stencils";
import { Tienda3StencilsHomeDecor } from "./TiendaFiles/Tienda3StencilsHomeDecor";
import { Tienda3StencilsHomeDecorMidi } from "./TiendaFiles/Tienda3StencilsHomeDecorMidi";
import { Tienda3StencilsSerieBN } from "./TiendaFiles/Tienda3StencilsSerieBN";
import { Tienda3StencilsPrivate } from "./TiendaFiles/Tienda3StencilsPrivate";
import { Tienda3StencilsCenefas } from "./TiendaFiles/Tienda3StencilsCenefas";
import { Tienda3StencilsMiscellaneous } from "./TiendaFiles/Tienda3StencilsMiscellaneous";
import { Tienda3TransfersFolex } from "./TiendaFiles/Tienda3TransfersFolex";
import { Tienda3Transfers } from "./TiendaFiles/Tienda3Transfers";
import { Tienda3TransfersHomeDecor } from "./TiendaFiles/Tienda3TransfersHomeDecor";
import { Tienda3TransfersTextil } from "./TiendaFiles/Tienda3TransfersTextil";
import { Tienda3Pastas } from "./TiendaFiles/Tienda3Pastas";
import { Tienda3PastasRelieve } from "./TiendaFiles/Tienda3PastasRelieve";
import { Tienda3PastasMixtion } from "./TiendaFiles/Tienda3PastasMixtion";
import { Tienda3PastasPatinaImprimacion } from "./TiendaFiles/Tienda3PastasPatinaImprimacion";
import { Tienda3PastasShabby } from "./TiendaFiles/Tienda3PastasShabby";
import { Tienda3PastasZeugma } from "./TiendaFiles/Tienda3PastasZeugma";
import { Tienda3PastasDistress } from "./TiendaFiles/Tienda3PastasDistress";
import { Tienda3PastasFlexibleMetalica } from "./TiendaFiles/Tienda3PastasFlexibleMetalica";
import { Tienda3PastasVintageLegend } from "./TiendaFiles/Tienda3PastasVintageLegend";
import { Tienda3Madera } from "./TiendaFiles/Tienda3Madera";
import { Tienda3Variado } from "./TiendaFiles/Tienda3Variado";




function App() {
  return (
    <BrowserRouter>
      <WavyContainer />
      <Routes>
          <Route index element={<PaginaPrincipal />} />
          <Route path="/tienda" element={<Tienda/>} />
          <Route path="/tienda/mint-by-michelle" element={<Tienda2/>} />
          <Route path="/tienda/cadence" element={<Tienda3/>} />
          <Route path="/tienda/cadence/hybrid" element={<Tienda3Hybrid/>} />
          <Route path="/tienda/cadence/hybrid-metallic" element={<Tienda3HybridMetallic/>} />
          <Route path="/tienda/cadence/barnices-craqueladores" element={<Tienda3Barnices/>} />
          <Route path="/tienda/cadence/pinturas-cosmos" element={<Tienda3Cosmos/>} />
          <Route path="/tienda/cadence/pinturas-ambientes-humedos" element={<Tienda3Ambientes/>} />
          <Route path="/tienda/cadence/stencils" element={<Tienda3Stencils/>} />
          <Route path="/tienda/cadence/stencils/home-decor" element={<Tienda3StencilsHomeDecor/>} />
          <Route path="/tienda/cadence/stencils/home-decor-midi" element={<Tienda3StencilsHomeDecorMidi/>} />
          <Route path="/tienda/cadence/stencils/serie-bn" element={<Tienda3StencilsSerieBN/>} />
          <Route path="/tienda/cadence/stencils/private" element={<Tienda3StencilsPrivate/>} />
          <Route path="/tienda/cadence/stencils/miscellaneous" element={<Tienda3StencilsMiscellaneous/>} />
          <Route path="/tienda/cadence/stencils/cenefas" element={<Tienda3StencilsCenefas/>} />
          <Route path="/tienda/cadence/transfers" element={<Tienda3Transfers/>} />
          <Route path="/tienda/cadence/transfers/folex" element={<Tienda3TransfersFolex/>} />
          <Route path="/tienda/cadence/transfers/home-decor" element={<Tienda3TransfersHomeDecor/>} />
          <Route path="/tienda/cadence/transfers/textil" element={<Tienda3TransfersTextil/>} />
          <Route path="/tienda/cadence/pastas" element={<Tienda3Pastas/>} />
          <Route path="/tienda/cadence/pastas/relieve" element={<Tienda3PastasRelieve/>} />
          <Route path="/tienda/cadence/pastas/mixtion" element={<Tienda3PastasMixtion/>} />
          <Route path="/tienda/cadence/pastas/patina-imprimacion" element={<Tienda3PastasPatinaImprimacion/>} />
          <Route path="/tienda/cadence/pastas/shabby" element={<Tienda3PastasShabby/>} />
          <Route path="/tienda/cadence/pastas/zeugma" element={<Tienda3PastasZeugma/>} />
          <Route path="/tienda/cadence/pastas/distress" element={<Tienda3PastasDistress/>} />
          <Route path="/tienda/cadence/pastas/flexible-metalica" element={<Tienda3PastasFlexibleMetalica/>} />
          <Route path="/tienda/cadence/pastas/vintage-legend" element={<Tienda3PastasVintageLegend/>} />
          <Route path="/tienda/cadence/soportes-madera" element={<Tienda3Madera/>} />
          <Route path="/tienda/cadence/variados" element={<Tienda3Variado/>} />
          <Route path="/tienda/muebles-ornamentos" element={<Tienda3Muebles/>} />
          <Route path="/aviso-legal" element={<AvisoLegal/>} />
          <Route path="/tienda/finalizar-pedido" element={<FinalizarPedido/>} />
          <Route path="*" element={<>No Match</>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
