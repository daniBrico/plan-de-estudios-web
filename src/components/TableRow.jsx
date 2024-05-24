import { DropdownButton } from './DropdownButton'
import { useState } from 'react'

function ListOfRows ({
  codigo,
  nombre,
  dictado,
  correlativas,
  index
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  let backgroundColor

  index % 2 === 0
    ? (backgroundColor = 'md:bg-thirdColor')
    : (backgroundColor = 'md:bg-secondColor')

  return (
    <>
      <tr
        className={`
          grid
          grid-cols-2
          rounded-md
          bg-thirdColor
          p-1
          md:table-row
          md:rounded-none
          ${backgroundColor}
          ${isDropdownOpen ? 'hover:bg-none' : 'md:hover:bg-hoverColor'}
        `}
      >
        <td
          className={`
              text-sm
              transition
              md:p-2
              md:text-center
              md:text-base
              ${isDropdownOpen ? 'text-firstColor underline' : ''}
            `}
        >
          {codigo}
        </td>
        <td
          className={`
              order-first
              col-span-2
              whitespace-nowrap
              text-wrap
              text-sm
              font-medium
              transition
              md:p-2
              md:text-base
              md:font-normal
              ${isDropdownOpen ? 'text-firstColor underline' : ''}
            `}
        >
          {nombre}
        </td>
        <td className='text-right text-sm md:p-2 md:text-center md:text-base'>
          {dictado}
        </td>
        <td className='flex items-end justify-center text-center text-sm font-thin md:table-cell md:p-2 md:text-base md:font-normal'>
          {correlativas.length !== 0 ? correlativas.join(' - ') : ''}
        </td>
        <td
          className={`
              flex
              items-end
              justify-end
              md:p-1
            `}
        >
          <DropdownButton
            isOpen={isDropdownOpen}
            toggleDropdown={toggleDropdown}
          />
        </td>
      </tr>
    </>
  )
}

export function TableRows ({ subjects }) {
  return subjects.map((subject, index) => (
    <ListOfRows
      key={subject.codigo}
      codigo={subject.codigo}
      nombre={subject.nombre}
      dictado={subject.dictado}
      correlativas={subject.correlativas}
      index={index}
      subjecstLength={subjects.length}
    />
  ))
}
