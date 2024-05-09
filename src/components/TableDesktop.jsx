import { TableRows } from './TableRowDesktop'

function ListOfTablesDesktop ({ tableTitle, subjects }) {
  return (
    <>
      <h2 className='mb-2 mt-4 hidden text-center text-2xl text-firstColor md:block'>
        {tableTitle}
      </h2>
      <table className='mx-auto mb-2 hidden rounded-b-lg rounded-t-lg rounded-tl-lg shadow-shadowBox md:block'>
        <thead className='sticky top-2 z-20 rounded-t-lg bg-firstColor'>
          <tr className='rounded-t-lg text-white'>
            <th className='min-w-28 whitespace-nowrap rounded-tl-lg border-b-2 border-back p-2 text-base font-bold tracking-wide'>
              Código
            </th>
            <th className='min-w-[400px] border-b-2 border-back p-2 text-left text-base font-bold tracking-wide'>
              Materia
            </th>
            <th className='w-20 border-b-2 border-back p-2 text-base font-bold tracking-wide'>
              Dictado
            </th>
            <th className='w-36 border-b-2 border-back p-2 text-base font-bold tracking-wide'>
              Correlativas
            </th>
            <th className='max-w-32 rounded-tr-lg border-b-2 border-back p-2 text-base font-bold tracking-wide'>
              Estado
            </th>
          </tr>
        </thead>
        <tbody className='text-black'>
          <TableRows subjects={subjects} />
        </tbody>
      </table>
    </>
  )
}

export function TablesDesktop ({ listOfSubjectsPerYear }) {
  return (
    listOfSubjectsPerYear
      ? listOfSubjectsPerYear.map((subjectPerYear) =>
        <ListOfTablesDesktop
          key={subjectPerYear.anio}
          careerYear={subjectPerYear.anio}
          subjects={subjectPerYear.materias}
        />
      )
      : null
  )
}
