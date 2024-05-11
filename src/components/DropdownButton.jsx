import { useState } from 'react'

export function DropdownButton({ isOpen, toggleDropdown }) {
  const [optionSelected, setOptionSelected] = useState('')

  const setOption = (option) => {
    setOptionSelected(option)
    toggleDropdown()
  }

  return (
    <div className='relative w-28 sm:w-3/4 md:w-full' data-drop-menu='dropdown'>
      <div
        onClick={toggleDropdown}
        className={`select glass hover:shadow-sha duration-600 group z-10 flex min-h-8 cursor-pointer items-center justify-between rounded border-2 border-solid border-firstColor px-2 text-white transition-shadow hover:border-white hover:bg-firstColor 
        ${isOpen ? 'border-[#f15a5c] shadow-shadowSelect' : ''}`}
      >
        <span
          className='selected text-firstColor group-hover:text-white'
          data-selected={optionSelected}
        >
          {optionSelected}
        </span>
        <div
          className={`caret h-0 w-0 border-l-[5px] border-r-[5px] border-t-[6px] border-l-transparent border-r-transparent border-t-firstColor transition duration-300 group-hover:border-t-white ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>
      <ul
        className={`absolute left-1/2 top-9 z-30 flex w-full -translate-x-1/2 flex-col gap-0.5 rounded-md border border-solid border-white px-2 py-2 text-center text-firstColor shadow-shadowBox transition duration-300 ${isOpen ? 'opacity-1 visible' : 'invisible opacity-0'} bg-thirdColor`}
      >
        <li
          onClick={() => setOption('Aprobada')}
          className='box-border cursor-pointer rounded-md px-0.5 py-1 transition hover:bg-firstColor hover:text-white hover:shadow'
        >
          Aprobada
        </li>
        <li
          onClick={() => setOption('Cursando')}
          className='box-border cursor-pointer rounded-md px-0.5 py-1 transition hover:bg-firstColor hover:text-white hover:shadow'
        >
          Cursando
        </li>
        <li
          onClick={() => setOption('Regular')}
          className='box-border cursor-pointer rounded-md px-0.5 py-1 transition hover:bg-firstColor hover:text-white hover:shadow'
        >
          Regular
        </li>
        <li
          onClick={() => setOption('Recursar')}
          className='box-border cursor-pointer rounded-md px-0.5 py-1 transition hover:bg-firstColor hover:text-white hover:shadow'
        >
          Recursar
        </li>
        <li
          onClick={() => setOption('')}
          className='box-border cursor-pointer rounded-md px-0.5 py-1 transition hover:bg-firstColor hover:text-white hover:shadow'
        >
          Quitar
        </li>
      </ul>
    </div>
  )
}
