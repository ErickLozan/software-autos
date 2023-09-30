import { Link } from "react-router-dom"
import { Navigation } from "../../Components/Navigation"

export const LaminacionYPinturaId = () => {
  return (
    <div className="flex">
      <Navigation />

      <div className="w-full h-screen px-10 py-5 flex flex-col gap-10 bg-slate-50 overflow-y-scroll">

        <Link to='/laminacion-y-pintura' className="flex items-center text-lg text-blue-700 transition-all duration-300 hover:text-blue-400"><span className="material-symbols-outlined">arrow_back</span> Regresar</Link>

        <div className="flex flex-col gap-5">
          <div>
            <div className="py-3 text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-slate-600"><h1 className="text-6xl font-extrabold">Laminación y Pintura</h1></div>
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
                <th className="text-lg">PROVEEDOR</th>
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
                <td>Juanito</td>
                <td>26/09/2023</td>
                <td>27/09/2023</td>
              </tr>
            </tbody>
          </table>

          <div className="flex gap-16">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <h3 className="text-4xl font-bold">Piezas a reparar</h3>
                <ul className="list-disc pl-10 text-lg">
                  <li>Rin</li>
                  <li>Manguera</li>
                  <li>Filtro</li>
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-4xl font-bold">Costo de material</h3>
                <span className="text-2xl">$1250<span className="text-sm">MXN</span></span>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-4xl font-bold">Costo de mano de obra</h3>
                <span className="text-2xl">$4200<span className="text-sm">MXN</span></span>
              </div>
            </div>

            <div className="w-[1px] bg-slate-300"></div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <h3 className="text-4xl font-bold">Total del servicio</h3>
                <span className="text-2xl">$5450<span className="text-sm">MXN</span></span>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-4xl font-bold">Forma de Pago</h3>
                <span className="text-2xl">Transferencia</span>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-4xl font-bold">Fecha de Pago</h3>
                <span className="text-2xl">25/09/2023</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
