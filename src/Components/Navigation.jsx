import { Link, NavLink } from 'react-router-dom'

export const Navigation = () => {
  return (
    <div className='min-w-[17rem] h-screen py-14 flex flex-col justify-between bg-gradient-to-br from-blue-600 to-blue-400'>
        <h1 className='px-5 flex items-center gap-2 text-white text-3xl font-extrabold'><span className='material-symbols-outlined text-5xl'>directions_car</span>Autos</h1>

        <nav>
          <ul className='flex flex-col'>
              <li className='text-white text-xl font-light border-y border-y-transparent transition-all duration-300 hover:border-y-blue-200'><NavLink to='/inventario' className='py-3 px-5 flex items-center gap-2 transition-all hover:bg-blue-500' activeclassname="active"><span className='material-symbols-outlined font-light text-4xl'>inventory_2</span>Inventario</NavLink></li>
              <li className='text-white text-xl font-light border-y border-y-transparent transition-all duration-300 hover:border-y-blue-200'><NavLink to='/laminacion-y-pintura' className='py-3 px-5 flex items-center gap-2 transition-all hover:bg-blue-500' activeclassname="active"><span className='material-symbols-outlined font-light text-4xl'>palette</span>Laminación y Pintura</NavLink></li>
              <li className='text-white text-xl font-light border-y border-y-transparent transition-all duration-300 hover:border-y-blue-200'><NavLink to='/estetica-y-pulido' className='py-3 px-5 flex items-center gap-2 transition-all hover:bg-blue-500' activeclassname="active"><span className='material-symbols-outlined font-light text-4xl'>brush</span>Estética y Pulido</NavLink></li>
              <li className='text-white text-xl font-light border-y border-y-transparent transition-all duration-300 hover:border-y-blue-200'><NavLink to='/aire-acondicionado' className='py-3 px-5 flex items-center gap-2 transition-all hover:bg-blue-500' activeclassname="active"><span className='material-symbols-outlined font-light text-4xl'>ac_unit</span>Aire Acondicionado</NavLink></li>
              <li className='text-white text-xl font-light border-y border-y-transparent transition-all duration-300 hover:border-y-blue-200'><NavLink to='/error' className='py-3 px-5 flex items-center gap-2 transition-all hover:bg-blue-500' activeclassname="active"><span className='material-symbols-outlined font-light text-4xl'>build</span>Refacciones</NavLink></li>
              <li className='text-white text-xl font-light border-y border-y-transparent transition-all duration-300 hover:border-y-blue-200'><NavLink to='/error' className='py-3 px-5 flex items-center gap-2 transition-all hover:bg-blue-500' activeclassname="active"><span className='material-symbols-outlined font-light text-4xl'>receipt_long</span>Reporte de resultados</NavLink></li>
          </ul>
        </nav>

        <div className='flex flex-col'>
          <Link to='/error' className='px-5 py-1 text-white text-xl flex items-center gap-2 font-light border-y border-y-transparent transition-all duration-300 hover:border-y-blue-200 hover:bg-blue-400'><span className='material-symbols-outlined font-light text-4xl'>logout</span>Cerrar Sesión</Link>
          <span className='px-10 text-white'>correo@ejemplo.com</span>
        </div>
    </div>
  )
}
