import { useState } from 'react'
import { DropdownButton } from './DropdownButton'

function ListOfRowsMobile ({ codigo, nombre, dictado, correlativas }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div
      className={`
        flex 
        justify-between 
        gap-0 
        rounded-md 
        border 
        border-solid 
        bg-thirdColor 
        p-1.5 
        ${isDropdownOpen ? 'border-firstColor shadow-shadowSelect' : 'border-secondColor shadow-sm'}`}
    >
      <div className='flex justify-between'>
        <div className='flex flex-col justify-between gap-4'>
          <div className=''>
            <div className='border-b-2 border-b-white'>
              <p className='text-pretty text-sm font-bold'>
                {nombre}
              </p>
            </div>
            <div className='mt-1'>
              <p className='text-sm font-semibold'>
                {codigo}
              </p>
            </div>
          </div>

          <div data-correlativas=''>
            <p className='text-sm font-light'>
              {
                correlativas.length !== 0
                  ? correlativas.join(' - ')
                  : ''
              }
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-between pb-1'>
        <div className='self-end font-light' data-dictado=''>
          <p className='text-sm'>{dictado}</p>
        </div>
        <DropdownButton isOpen={isDropdownOpen} toggleDropdown={toggleDropdown} />
      </div>
    </div>
  )
}

export function TableRowsMobile ({ subjects }) {
  return (
    subjects.map((subject, index) =>
      <ListOfRowsMobile
        key={subject.codigo}
        codigo={subject.codigo}
        nombre={subject.nombre}
        dictado={subject.dictado}
        correlativas={subject.correlativas}
        index={index}
      />
    )
  )
}
