import { DropdownButton } from './DropdownButton'
import { useState } from 'react'

export function TableRow ({ codigo, nombre, dictado, correlativas, index, subjecstLength }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  let backgroundColor

  index % 2 === 0
    ? backgroundColor = 'bg-thirdColor'
    : backgroundColor = 'bg-secondColor'

  return (
    <>
      <tr className={`${backgroundColor} ${isDropdownOpen ? 'hover:bg-none' : 'hover:bg-hoverColor'}`}>
        <td
          className={
            `
            border-back 
              p-2 
              text-center 
              text-base 
              transition
              ${subjecstLength - 1 !== index ? 'border-b-2' : 'rounded-bl-lg border-b-0'}
              ${isDropdownOpen ? 'text-firstColor underline' : ''}
            `
          }
        >
          {codigo}
        </td>
        <td
          className={
            `
              whitespace-nowrap
              ${subjecstLength - 1 !== index ? 'border-b-2' : ''}
              border-l-2
            border-back
              p-2
              text-base
              transition
              ${isDropdownOpen ? 'text-firstColor underline' : ''}
            `
          }
        >
          {nombre}
        </td>
        <td
          className={`${subjecstLength - 1 !== index ? 'border-b-2' : ''} border-l-2 border-back p-2 text-center text-base`}
        >
          {dictado}
        </td>
        <td className={`${subjecstLength - 1 !== index ? 'border-b-2' : ''} border-l-2 border-back p-2 text-center text-base`}>
          {correlativas.join(' - ')}
        </td>
        <td
          className={
            `
              ${subjecstLength - 1 !== index ? 'border-b-2' : 'rounded-br-lg'} 
              border-l-2 
              border-back 
              p-2 
              text-center 
              text-base 
            `
          }
        >
          <DropdownButton isOpen={isDropdownOpen} toggleDropdown={toggleDropdown} />
        </td>
      </tr>
    </>
  )
}
