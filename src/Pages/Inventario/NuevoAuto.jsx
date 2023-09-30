import { useState } from "react"
import { Navigation } from "../../Components/Navigation"
import { Link } from "react-router-dom"

export const NuevoAuto = () => {

  const [poliza, setPoliza] = useState('Adjuntar poliza')
  const [polizaDisabled, setPolizaDisabled] = useState(true)

  return (
    <div className="flex">
      <Navigation />

      <form onSubmit={e => e.preventDefault()} className="w-full h-screen px-10 py-5 flex flex-col gap-5 bg-slate-50 overflow-y-scroll">
        <Link to='/inventario' className="flex items-center text-lg text-blue-700 transition-all duration-300 hover:text-blue-400"><span className="material-symbols-outlined">arrow_back</span> Regresar</Link>

        <div className='py-4 text-transparent bg-clip-text bg-gradient-to-br from-orange-600 to-orange-300'><h2 className='text-8xl font-extrabold'>Nuevo Auto</h2></div>


        <div className="flex flex-col gap-5">
          <div>
            <div className="text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-slate-600"><h1 className="text-6xl font-extrabold">Ficha Técnica</h1></div>
            <span className="text-lg text-slate-600">Inventario 001250923</span>
          </div>

          <div className="w-full border-2 border-slate-800 px-3">
            <table>
              <thead>
                <tr>
                  <th className="py-3 text-lg">ID</th>
                  <th className="text-lg">MARCA</th>
                  <th className="text-lg">MODELO</th>
                  <th className="text-lg">AÑO</th>
                  <th className="text-lg">KILOMETRAJE</th>
                  <th className="text-lg">FECHA DE ENTRADA</th>
                  <th className="text-lg">FECHA DE SALIDA</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="py-3">001250923</td>
                  <td><input type="text" placeholder="Marca" className="border-b border-b-black bg-transparent outline-none w-[80%] text-center" /></td>
                  <td><input type="text" placeholder="Modelo" className="border-b border-b-black bg-transparent outline-none w-[80%] text-center" /></td>
                  <td><input type="number" placeholder="Año" className="border-b border-b-black bg-transparent outline-none w-[80%] text-center" /></td>
                  <td><input type="number" placeholder="Kilometraje" className="border-b border-b-black bg-transparent outline-none w-[80%] text-center" /></td>
                  <td><input type="date" className="border-b border-b-black bg-transparent outline-none w-[80%] text-center" /></td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex gap-10">
            <ul>
              <li className="text-lg"><b>Monto de la compra:</b> <input type="number" className="border-b border-b-black bg-white outline-none" /></li>
              <li className="text-lg"><b>Comisión de compra:</b> <input type="number" className="border-b border-b-black bg-white outline-none" /></li>
              <li className="text-lg flex gap-3"><b>Duplicado de llaves:</b>
                <label htmlFor="si-llaves" className="flex gap-1">
                  Si
                  <input type="radio" name="llaves" id="si-llaves" />
                </label>
                <label htmlFor="no-llaves" className="flex gap-1">
                  No
                  <input type="radio" name="llaves" id="no-llaves" />
                </label>
              </li>
              <li className="text-lg flex gap-3"><b>Seguro:</b>
                <label htmlFor="si-seguro" className="flex gap-1">
                  Si
                  <input onChange={() => {
                    setPolizaDisabled(false)
                  }} type="radio" name="seguro" id="si-seguro" />
                </label>
                <label htmlFor="no-seguro" className="flex gap-1">
                  No
                  <input onChange={() => {
                    setPolizaDisabled(true)
                    document.getElementById('poliza').value = null
                    setPoliza('Adjuntar poliza')
                  }} type="radio" name="seguro" id="no-seguro" />
                </label>
                <label htmlFor="poliza" className={`border-2 border-blue-900 border-dashed px-3 transition-all duration-300 ${polizaDisabled === true ? 'opacity-50' : 'cursor-pointer hover:bg-blue-50 hover:shadow-md'}`}>{poliza}</label>
                <input onChange={e => setPoliza(e.target.files[0].name)} type="file" id="poliza" hidden disabled={polizaDisabled} />
              </li>
              <li className="text-lg flex gap-3"><b>Cuenta con manuales:</b>
                <label htmlFor="si-manuales" className="flex gap-1">
                  Si
                  <input type="radio" name="manuales" id="si-manuales" />
                </label>
                <label htmlFor="no-manuales" className="flex gap-1">
                  No
                  <input type="radio" name="manuales" id="no-manuales" />
                </label>
              </li>
              <li className="text-lg flex gap-3"><b>Llanta de refacción:</b>
                <label htmlFor="si-llanta" className="flex gap-1">
                  Si
                  <input type="radio" name="llanta" id="si-llanta" />
                </label>
                <label htmlFor="no-llanta" className="flex gap-1">
                  No
                  <input type="radio" name="llanta" id="no-llanta" />
                </label>
              </li>
              <li className="text-lg"><b>Presupuesto de reacondicionamiento:</b> <input type="number" className="border-b border-b-black bg-white outline-none" /></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-slate-600"><h1 className="text-6xl font-extrabold">Expediente</h1></div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <label htmlFor="factura" className="text-2xl font-bold text-slate-800">Factura</label>
              <input type="file" id="factura" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="factura" className="text-2xl font-bold text-slate-800">Refacturas</label>
              <input type="file" id="factura" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="factura" className="text-2xl font-bold text-slate-800">INE</label>
              <input type="file" id="factura" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="factura" className="text-2xl font-bold text-slate-800">Tenencias</label>
              <input type="file" id="factura" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="factura" className="text-2xl font-bold text-slate-800">TC</label>
              <input type="file" id="factura" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="factura" className="text-2xl font-bold text-slate-800">Verificación</label>
              <input type="file" id="factura" />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}