//import React from 'react'

// eslint-disable-next-line react/prop-types
export const Modal = ({display, title, subTitle, children}) => {

  return (
    <div id="modal" className={`fixed h-screen w-full left-0 right-0 top-0 bottom-0 bg-black bg-opacity-50 ${display} items-center justify-center`}>
        <div className="relative w-[40%] h-min p-5 bg-white">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl">{title}</h1>
            <span className="text-center text-slate-500">{subTitle}</span>
          </div>
            
          <hr className="my-5 border-slate-300" />

          {children}

        </div>
    </div>
  )
}
