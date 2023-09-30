import { Navigation } from "../../Components/Navigation"
import { Link } from "react-router-dom"
import { Modal } from '../../Components/Modal'
import { useState } from "react"

export const InventarioId = () => {
  const array = ['factura.pdf', 'refacturas.pdf', 'INE.pdf', 'tenencias.pdf', 'TC.pdf', 'verificacion.pdf']

  const [display1, setDisplay1] = useState('hidden')
  const [display2, setDisplay2] = useState('hidden')

  const [selled, setSelled] = useState(false)

  return (
    <div className="flex">
      <Navigation />

      <Modal display={display1} title='Marcar vendido' subTitle='Confirmar venta'>
        <button onClick={() => setDisplay1('hidden')} className="absolute right-2 top-2 p-2 flex items-center active:bg-gray-100"><span className="material-symbols-outlined">close</span></button>

        <form onSubmit={e => {
          e.preventDefault()
          setSelled(true)
          setDisplay1('hidden')
        }}>
          <div className="flex gap-3">
            <div className="flex flex-col basis-0 flex-grow mb-5">
              <label htmlFor="fecha_salida" className="font-bold text-slate-600">Fecha de salida</label>
              <input type="date" id="fecha_salida" className="p-1 rounded-md border border-slate-300 transition-all outline-none focus:border-black" />
            </div>
            <div className="flex flex-col basis-0 flex-grow">
              <label htmlFor="monto_venta" className="font-bold text-slate-600">Monto de la venta</label>
              <input type="number" id="monto_venta" placeholder="$" className="p-1 rounded-md border border-slate-300 transition-all outline-none focus:border-black" />
            </div>
            <div className="flex flex-col basis-0 flex-grow">
              <label htmlFor="comision_salida" className="font-bold text-slate-600">Comisión de salida</label>
              <input type="number" id="comision_salida" placeholder="$" className="p-1 rounded-md border border-slate-300 transition-all outline-none focus:border-black" />
            </div>
          </div>

          <input type="submit" className="p-2 rounded-md border border-green-100 bg-gradient-to-br from-green-500 to-green-300 cursor-pointer transition-all duration-300 hover:shadow-lg font-medium text-white w-full" value='Vender' />
        </form>

      </Modal>
      <Modal display={display2} title='Cancelar venta' subTitle='001250923'>
        <button onClick={() => setDisplay2('hidden')} className="absolute right-2 top-2 p-2 flex items-center active:bg-gray-100"><span className="material-symbols-outlined">close</span></button>

        <div className="mb-5 text-center">
          <h3 className="text-2xl">¿Seguro que desea cancelar esta venta?</h3>
          <span className="text-gray-500">Se descontarán las ganancias($) y gastos($) de los resultados.</span>  
        </div>

        <button onClick={() => {
          setSelled(false)
          setDisplay2('hidden')
        }} className="p-2 rounded-md border border-red-100 bg-gradient-to-br from-red-500 to-red-300 cursor-pointer transition-all duration-300 hover:shadow-lg font-medium text-white w-full">Cancelar</button>
      </Modal>

      <div className="w-full h-screen px-10 py-5 flex flex-col gap-10 bg-slate-50 overflow-y-scroll">
        <Link to='/inventario' className="flex items-center text-lg text-blue-700 transition-all duration-300 hover:text-blue-400"><span className="material-symbols-outlined">arrow_back</span> Regresar</Link>

        <div className="flex flex-col gap-5">
          <div>
            <div className="text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-slate-600"><h1 className="text-6xl font-extrabold">Ficha Técnica</h1></div>
            <span className="text-lg text-slate-600">Inventario 001250923</span>
          </div>

          <table className="w-full border-2 border-slate-800">
            <thead>
              <tr className="bg-white">
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
              <tr className="text-center bg-white">
                <td className="py-3">001250923</td>
                <td>NISSAN</td>
                <td>SENTRA</td>
                <td>2020</td>
                <td>50,000</td>
                <td>25/09/2023</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>

          <div className="flex gap-10">
            <div className="flex flex-col gap-3">
              <span className="text-center font-bold text-2xl">Entrada</span>
              <ul>
                <li className="text-lg"><b>Monto de la compra:</b> $140,000<span className="text-xs">MXN</span></li>
                <li className="text-lg"><b>Comisión de compra:</b> $20,000<span className="text-xs">MXN</span></li>
                <li className="text-lg"><b>Duplicado de llaves:</b> Sí</li>
                <li className="text-lg flex gap-3"><b>Seguro:</b> Sí <button className="bg-gradient-to-br from-white to-slate-200 px-2 border border-black rounded flex items-center gap-3">poliza.pdf <span className="material-symbols-outlined">download</span></button></li>
                <li className="text-lg"><b>Cuenta con manuales:</b> Sí</li>
                <li className="text-lg"><b>Llanta de refacción:</b> Sí</li>
                <li className="text-lg"><b>Presupuesto de reacondicionamiento:</b> $8,500<span className="text-xs">MXN</span></li>
              </ul>
            </div>

            <div className="w-[1px] bg-slate-300"></div>

            <div>
                <div className="flex flex-col gap-3">
                  <span className="text-center font-bold text-2xl">Salida</span>
                    <div>
                    <div className="flex gap-3 items-center">
                      {
                        selled === false ? (
                          <>
                            <div className="p-1 rounded-lg border border-slate-800 bg-gray-400 text-gray-600 text-center font-bold">No vendido</div>
                            <button onClick={() => setDisplay1('flex')} className="text-green-600 border-b border-b-green-600 transition-all duration-300 hover:text-green-500 hover:border-b-green-500">Marcar vendido</button>
                          </>
                        ) : (
                          <>
                            <div className="p-1 rounded-lg border border-green-800 bg-green-400 text-white text-center font-bold">Vendido</div>
                            <button onClick={() => setDisplay2('flex')} className="flex items-center gap-1 text-red-600 border-b border-b-red-600 transition-all duration-300 hover:text-red-500 hover:border-b-red-500"><span className="material-symbols-outlined">close</span> Cancelar venta</button>
                          </>
                        )
                      }
                    </div>
                    <ul>
                      <li className="text-lg"><b>Monto de la venta:</b> -</li>
                      <li className="text-lg"><b>Comisión de salida:</b> -</li>
                    </ul>
                  </div>
                </div>
              </div>
          </div>
        </div>

        <table>
          <tbody>
            <tr>
              <td className="border border-black p-2 w-[400px]">Mecánica</td>
              <td className="border border-black p-2">Concepto</td>
              <td className="border border-black p-2">Monto</td>
            </tr>
            <tr>
              <td className="border border-black p-2">Laminación y pintura</td>
              <td className="border border-black p-2">Concepto</td>
              <td className="border border-black p-2">Monto</td>
            </tr>
            <tr>
              <td className="border border-black p-2">Estética y pulido</td>
              <td className="border border-black p-2">Concepto</td>
              <td className="border border-black p-2">Monto</td>
            </tr>
            <tr>
              <td className="border border-black p-2">Aire acondicionado</td>
              <td className="border border-black p-2">Concepto</td>
              <td className="border border-black p-2">Monto</td>
            </tr>
            <tr>
              <td className="border border-black p-2">Velocímetro</td>
              <td className="border border-black p-2">Concepto</td>
              <td className="border border-black p-2">Monto</td>
            </tr>
          </tbody>
        </table>

        <div className="flex flex-col gap-5">
          <div className="text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-slate-600"><h1 className="text-6xl font-extrabold">Expediente</h1></div>

          <div className="flex flex-wrap gap-5">
            {
              array.map((documento ,index) => (
                <div key={index} className="flex items-end w-[200px] h-[200px] bg-slate-500 cursor-pointer">
                  <div className="text-center p-1 bg-white w-full shadow">{documento}</div>
                </div>
                )
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}
