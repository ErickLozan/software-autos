import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Inventario } from './Pages/Inventario'
import { LaminacionYPintura } from './Pages/LaminacionYPintura'
import { EsteticaYPulido } from './Pages/EsteticaYPulido'
import { AireAcondicionado } from './Pages/AireAcondicionadio'
import { InventarioId } from './Pages/Inventario/InventarioId'
import { LaminacionYPinturaId } from './Pages/LaminacionYPintura/LaminacionYPinturaId'
import { EsteticaYPulidoId } from './Pages/EsteticaYPulido/EsteticaYPulidoId'
import { AireAcondicionadoId } from './Pages/AireAcondicionado/AireAcondicionadoId'
import { EnProceso } from './Components/EnProceso'
import { NuevoAuto } from './Pages/Inventario/NuevoAuto'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inventario />} />
        <Route path='/inventario' element={<Inventario />} />
        <Route path='/laminacion-y-pintura' element={<LaminacionYPintura />} />
        <Route path='/estetica-y-pulido' element={<EsteticaYPulido />} />
        <Route path='/aire-acondicionado' element={<AireAcondicionado />} />

        <Route path='/inventario/:id' element={<InventarioId />} />
        <Route path='/laminacion-y-pintura/:id' element={<LaminacionYPinturaId />} />
        <Route path='/estetica-y-pulido/:id' element={<EsteticaYPulidoId />} />
        <Route path='/aire-acondicionado/:id' element={<AireAcondicionadoId />} />

        <Route path='/nuevo-auto' element={<NuevoAuto />} />

        {/*QUITAR*/}
        <Route path='*' element={<EnProceso />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
