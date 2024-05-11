import { TableRows } from './TableRow'

function ListOfTables({ tableTitle, subjects }) {
  return (
    <>
      <h2 className='sticky top-2 z-20 mb-2 mt-4 rounded-tl-md rounded-tr-md bg-firstColor py-1 text-center text-xl text-white md:static md:rounded-none md:bg-white md:text-2xl md:text-firstColor'>
        {tableTitle}
      </h2>
      <table className='mx-auto mb-5 w-full rounded-b-lg rounded-t-lg rounded-tl-lg md:shadow-shadowBox'>
        <thead className='top-2 z-20 hidden rounded-t-lg bg-firstColor md:sticky md:table-header-group'>
          <tr className='rounded-t-lg text-white'>
            <th className='rounded-tl-lg border-b-2 border-back p-2 text-base font-bold tracking-wide'>
              Código
            </th>
            <th className='border-b-2 border-back p-2 text-left text-base font-bold tracking-wide'>
              Materia
            </th>
            <th className='border-b-2 border-back p-2 text-base font-bold tracking-wide'>
              Dictado
            </th>
            <th className='w-32 border-b-2 border-back p-2 text-base font-bold tracking-wide'>
              Correlativas
            </th>
            <th className='w-32 rounded-tr-lg border-b-2 border-back p-2 text-base font-bold tracking-wide'>
              Estado
            </th>
          </tr>
        </thead>
        <tbody className='grid grid-cols-1 gap-1 text-black sm:grid-cols-2 md:table-row-group'>
          <TableRows subjects={subjects} />
        </tbody>
      </table>
    </>
  )
}

export function Tables({ listOfSubjectsPerYear }) {
  return listOfSubjectsPerYear
    ? listOfSubjectsPerYear.map((subjectPerYear) => (
        <ListOfTables
          key={subjectPerYear.anio}
          tableTitle={subjectPerYear.anio}
          subjects={subjectPerYear.materias}
        />
      ))
    : null
}
