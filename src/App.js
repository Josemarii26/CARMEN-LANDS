
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
import { Tienda3Barnices } from "./TiendaFiles/Tienda3Barnices";
import { Tienda3Cosmos } from "./TiendaFiles/Tienda3Cosmos";
import { Tienda3Ambientes } from "./TiendaFiles/Tienda3Ambientes";
import { Tienda3Pinturas } from "./TiendaFiles/Tienda3Pinturas";
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
import { Tienda3Papeles } from "./TiendaFiles/Tienda3Papeles";
import { Tienda3PapelesJapones } from "./TiendaFiles/Tienda3PapelesJapones";
import { Tienda3PapelesCiaoBella } from "./TiendaFiles/Tienda3PapelesCiaoBella";
import { Tienda3TransfersColors } from "./TiendaFiles/Tienda3TransfersColors";
import { Tienda3Resina } from "./TiendaFiles/Tienda3Resina";
import { Tienda3Ceras } from "./TiendaFiles/Tienda3Ceras";
import { Tienda3MaterialesTrabajo } from "./TiendaFiles/Tienda3MaterialesTrabajo";
import { Tienda3PinturaMattMetallic } from "./TiendaFiles/Tienda3PinturaMattMetallic";
import { Tienda3TextilCadence } from "./TiendaFiles/Tienda3TextilCadence";
import { Tienda3PinturasTextiles } from "./TiendaFiles/Tienda3PinturasTextiles";
import { Tienda3SpraysTextiles } from "./TiendaFiles/Tienda3SpraysTextiles";
import { Tienda3PastasTextiles } from "./TiendaFiles/Tienda3PastasTextiles";
import { Tienda3PastasTextilesFashion } from "./TiendaFiles/Tienda3PastasTextilesFashion";
import { Tienda3PastasTextilesFashionMetallic } from "./TiendaFiles/Tienda3PastasTextilesFashionMetallic";
import { Tienda3PastasTextilesHILITE } from "./TiendaFiles/Tienda3PastasTextilesHILITE";
import { Tienda3PastasTextilesMetallic } from "./TiendaFiles/Tienda3PastasTextilesMetallic";
import { Tienda3MixtionTextil } from "./TiendaFiles/Tienda3MixtionTextil";
import { Tienda3FoilTextil } from "./TiendaFiles/Tienda3FoilTextil";
import { Tienda4} from "./TiendaFiles/Tienda4";
import { Tienda5 } from "./TiendaFiles/Tienda5";
import { Tienda5MontejoTextil } from "./TiendaFiles/Tienda5MontejoTextil";
import { Tienda3PapelCartonajeRossi } from "./TiendaFiles/Tienda3PapelCartonajeRossi";
import { Tienda3PapersForYouTela, Tienda6PapersForYouTela } from "./TiendaFiles/Tienda6PapersForYouTela";
import { Tienda3PapersForYou } from "./TiendaFiles/Tienda3PapersForYou";
import { Tienda3PapersForYouLino, Tienda6PapersForYouLino } from "./TiendaFiles/Tienda6PapersForYouLino";
import { Tienda6 } from "./TiendaFiles/Tienda6";
import { Tienda7 } from "./TiendaFiles/Tienda7";




function App() {
  return (
    <BrowserRouter>
      <WavyContainer />
      <Routes>
          <Route index element={<PaginaPrincipal />} />
          <Route path="/tienda" element={<Tienda/>} />
          <Route path="/tienda/mint-by-michelle" element={<Tienda2/>} />
          <Route path="/tienda/cadence" element={<Tienda3/>} />
          <Route path="/tienda/cadence/textil-cadence" element={<Tienda3TextilCadence/>} />
          <Route path="/tienda/cadence/textil-cadence/pinturas-textiles" element={<Tienda3PinturasTextiles />} />
          <Route path="/tienda/cadence/textil-cadence/sprays-textiles" element={<Tienda3SpraysTextiles />} />
          <Route path="/tienda/cadence/textil-cadence/pastas-textiles" element={<Tienda3PastasTextiles />} />
          <Route path="/tienda/cadence/textil-cadence/pastas-textiles/fashion" element={<Tienda3PastasTextilesFashion />} />
          <Route path="/tienda/cadence/textil-cadence/pastas-textiles/fashion-metallic" element={<Tienda3PastasTextilesFashionMetallic />} />
          <Route path="/tienda/cadence/textil-cadence/pastas-textiles/relieve-HI-LITE" element={<Tienda3PastasTextilesHILITE/>} />
          <Route path="/tienda/cadence/textil-cadence/pastas-textiles/relieve-metallic" element={<Tienda3PastasTextilesMetallic/>} />
          <Route path="/tienda/cadence/textil-cadence/mixtion-textil" element={<Tienda3MixtionTextil />} />
          <Route path="/tienda/cadence/textil-cadence/foil" element={<Tienda3FoilTextil />} />
          <Route path="/tienda/cadence/pinturas" element={<Tienda3Pinturas/>} />
          <Route path="/tienda/cadence/pinturas/hybrid" element={<Tienda3Hybrid/>} />
          <Route path="/tienda/cadence/pinturas/hybrid-metallic" element={<Tienda3HybridMetallic/>} />
          <Route path="/tienda/cadence/pinturas/cosmos" element={<Tienda3Cosmos/>} />
          <Route path="/tienda/cadence/pinturas/ambientes-humedos" element={<Tienda3Ambientes/>} />
          <Route path="/tienda/cadence/pinturas/matt-metallic" element={<Tienda3PinturaMattMetallic />} />
          <Route path="/tienda/cadence/barnices-craqueladores" element={<Tienda3Barnices/>} />
          <Route path="/tienda/cadence/stencils" element={<Tienda3Stencils/>} />
          <Route path="/tienda/cadence/stencils/home-decor" element={<Tienda3StencilsHomeDecor/>} />
          <Route path="/tienda/cadence/stencils/home-decor-midi" element={<Tienda3StencilsHomeDecorMidi/>} />
          <Route path="/tienda/cadence/stencils/serie-bn" element={<Tienda3StencilsSerieBN/>} />
          <Route path="/tienda/cadence/stencils/private" element={<Tienda3StencilsPrivate/>} />
          <Route path="/tienda/cadence/stencils/miscellaneous" element={<Tienda3StencilsMiscellaneous/>} />
          <Route path="/tienda/cadence/stencils/cenefas" element={<Tienda3StencilsCenefas/>} />
          <Route path="/tienda/cadence/ceras" element={<Tienda3Ceras/>} />
          <Route path="/tienda/cadence/transfers" element={<Tienda3Transfers/>} />
          {/*<Route path="/tienda/cadence/transfers/folex" element={<Tienda3TransfersFolex/>} />*/}
          <Route path="/tienda/cadence/transfers/home-decor" element={<Tienda3TransfersHomeDecor/>} />
          <Route path="/tienda/cadence/transfers-textiles" element={<Tienda3TransfersTextil/>} />
          {/*<Route path="/tienda/cadence/transfers/colors" element={<Tienda3TransfersColors/>} />*/}
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
          <Route path="/tienda/cadence/soportes-resina" element={<Tienda3Resina/>} />
          <Route path="/tienda/cadence/variados" element={<Tienda3Variado/>} />
          <Route path="/tienda/cadence/materiales-trabajo" element={<Tienda3MaterialesTrabajo/>} />
          <Route path="/tienda/cadence/papeles" element={<Tienda3Papeles/>} />
          <Route path="/tienda/cadence/papeles/japones" element={<Tienda3PapelesJapones/>} />
          <Route path="/tienda/cadence/papeles/ciao-bella" element={<Tienda3PapelesCiaoBella/>} />
          <Route path="/tienda/cadence/papel-cartonaje-rossi" element={<Tienda3PapelCartonajeRossi/>} />
          <Route path="/tienda/cadence/papers-for-you" element={<Tienda3PapersForYou/>} />
          
          <Route path="/tienda/muebles-ornamentos" element={<Tienda4/>} />
          <Route path="/tienda/montejo" element={<Tienda5/>} />
          <Route path="/tienda/montejo/textil" element={<Tienda5MontejoTextil/>} />
          <Route path="/tienda/papers-for-you" element={<Tienda6/>} />
          <Route path="/tienda/papers-for-you/tela" element={<Tienda6PapersForYouTela/>} />
          <Route path="/tienda/papers-for-you/lino" element={<Tienda6PapersForYouLino/>} />
          <Route path="/tienda/rossi" element={<Tienda7/>} />

          <Route path="/aviso-legal" element={<AvisoLegal/>} />
          <Route path="/tienda/finalizar-pedido" element={<FinalizarPedido/>} />
          <Route path="*" element={<>No Match</>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
