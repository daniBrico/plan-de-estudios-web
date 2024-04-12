export function TableRow ({ codigo, nombre, dictado, correlativas, index, subjecstLength }) {
  let backgroundColor

  index % 2 === 0
    ? backgroundColor = 'bg-thirdColor'
    : backgroundColor = 'bg-secondColor'

  return (
    <>
      <tr className={`${backgroundColor} hover:bg-hoverColor`}>
        <td
          className={
            `
              ${subjecstLength - 1 !== index ? 'border-b-2' : ''}
               border-back 
               p-2 
               text-center 
               text-base 
               transition 
               ${subjecstLength - 1 === index ? 'rounded-bl-lg' : ''}
            `
          }
        >
          {codigo}
        </td>
        <td
          className={`whitespace-nowrap ${subjecstLength - 1 !== index ? 'border-b-2' : ''} border-l-2 border-back p-2 text-base transition`}
        >
          {nombre}
        </td>
        <td
          className={`${subjecstLength - 1 !== index ? 'border-b-2' : ''} border-l-2 border-back p-2 text-center text-base`}
        >
          {dictado}
        </td>
        <td className={`${subjecstLength - 1 !== index ? 'border-b-2' : ''} border-l-2 border-back p-2 text-center text-base`} />
        <td
          className={
            `
              ${subjecstLength - 1 !== index ? 'border-b-2' : ''} 
              border-l-2 
              border-back 
              p-2 
              text-center 
              text-base 
              ${subjecstLength - 1 === index ? 'rounded-br-lg' : ''}
            `
          }
        />
      </tr>
    </>
  )
}
