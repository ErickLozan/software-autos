import { Navigation } from '../Components/Navigation'
import { Link } from 'react-router-dom'
import { Modal } from '../Components/Modal'
import { useState } from 'react'

export const EsteticaYPulido = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  const [display, setDisplay] = useState('hidden')

  return (
    <div className='flex'>
      <Navigation />

      <Modal display={display} title="Filtrar Información" subTitle='Estética y pulido'>
        <button onClick={() => setDisplay('hidden')} className="absolute right-2 top-2 p-2 flex items-center active:bg-gray-100"><span className="material-symbols-outlined">close</span></button>

          <form onSubmit={e => e.preventDefault()}>
            <section className="flex gap-3 flex-wrap">
              <div className="flex flex-col basis-0 flex-grow">
                <label htmlFor="id" className="font-bold text-slate-600">ID</label>
                <input type="number" id="id" placeholder="ID" className="p-1 rounded-md border border-slate-300 transition-all outline-none focus:border-black" />
              </div>
              <div className="flex flex-col basis-0 flex-grow">
                <label htmlFor="entrada" className="font-bold text-slate-600">Fecha de entrada</label>
                <input type="date" id="entrada" className="p-1 rounded-md border border-slate-300 transition-all outline-none focus:border-black" />
              </div>
              <div className="flex flex-col basis-0 flex-grow">
                <label htmlFor="salida" className="font-bold text-slate-600">Fecha de salida</label>
                <input type="date" id="salida" className="p-1 rounded-md border border-slate-300 transition-all outline-none focus:border-black" />
              </div>
              <div className="flex flex-col basis-0 flex-grow">
                <label htmlFor="proveedor" className="font-bold text-slate-600">Proveedor</label>
                <input type="text" id="proveedor" placeholder='Proveedor' className="p-1 rounded-md border border-slate-300 transition-all outline-none focus:border-black" />
              </div>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="text-2xl mt-5">Vehículo</h2>
              <div className="flex gap-3 flex-wrap">
                <div className="flex flex-col basis-0 flex-grow">
                  <label htmlFor="marca" className="font-bold text-slate-600">Marca</label>
                  <input type="text" id="marca" placeholder="Marca" className="p-1 rounded-md border border-slate-300 transition-all outline-none focus:border-black" />
                </div>
                <div className="flex flex-col basis-0 flex-grow">
                  <label htmlFor="modelo" className="font-bold text-slate-600">Modelo</label>
                  <input type="text" id="modelo" placeholder="Modelo" className="p-1 rounded-md border border-slate-300 transition-all outline-none focus:border-black" />
                </div>
                <div className="flex flex-col basis-0 flex-grow">
                  <label htmlFor="año" className="font-bold text-slate-600">Año</label>
                  <input type="number" id="año" placeholder="Año" className="p-1 rounded-md border border-slate-300 transition-all outline-none focus:border-black" />
                </div>
                <div className="flex flex-col basis-0 flex-grow">
                  <label htmlFor="kilometraje" className="font-bold text-slate-600">Kilometraje</label>
                  <input type="number" id="kilometraje" placeholder="Km" className="p-1 rounded-md border border-slate-300 transition-all outline-none focus:border-black" />
                </div>
              </div>
            </section>

            <button className='flex justify-between py-2 px-3 bg-gradient-to-br from-transparent to-slate-200 w-full mt-5'>
              <span>Más filtros</span>
              <span className='material-symbols-outlined'>expand_more</span>
            </button>

            <hr className="my-5 border-slate-300" />

            <input type="submit" className="p-2 rounded-md border border-orange-400 bg-gradient-to-br from-orange-500 to-orange-300 cursor-pointer transition-all duration-300 hover:shadow-lg font-medium text-white w-full" value='Filtrar' />
          </form>
      </Modal>

      <div className='px-10 py-5 w-full bg-slate-50 flex flex-col gap-5'>
        <div className='py-4 text-transparent bg-clip-text bg-gradient-to-br from-orange-600 to-orange-300'><h2 className='text-8xl font-extrabold'>Estética y Pulido</h2></div>

        <button onClick={() => setDisplay('flex')} className='w-min px-14 py-2 bg-slate-200 border border-slate-600 hover:shadow-md transition-all duration-300'>Filtrar</button>

        <table className='w-[80%]'>
          <thead>
            <tr className='text-center border-b border-b-black bg-gradient-to-br from-orange-500 to-orange-400'>
              <th className='py-2 text-white'>ID</th>
              <th className='text-white'>MARCA</th>
              <th className='text-white'>MODELO</th>
              <th className='text-white'>AÑO</th>
              <th className='text-white'>KILOMETRAJE</th>
              <th className='text-white'>PROVEEDOR</th>
              <th className='text-white'>FECHA DE ENTRADA</th>
              <th className='text-white'>FECHA DE SALIDA</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              array.map(registro => (
                <tr key={registro} className='text-center border-b border-b-gray-400'>
                  <td className='py-2'><Link to='/estetica-y-pulido/001250923' className='transition-all duration-300 hover:text-slate-500'>001250923</Link></td>
                  <td>NISSAN</td>
                  <td>SENTRA</td>
                  <td>2020</td>
                  <td>50,000</td>
                  <td>Pedrito</td>
                  <td>26/09/2023</td>
                  <td>27/09/2023</td>
                  <td className='flex gap-3 py-2'>
                    <Link to='/error'><span className='material-symbols-outlined'>edit</span></Link>
                    <button><span className='material-symbols-outlined text-red-800'>delete</span></button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}