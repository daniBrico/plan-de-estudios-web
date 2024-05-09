import { TableRowsMobile } from './TableRowMobile'

function ListOfTablesMobile ({ tableTitle, subjects }) {
  return (
    <>
      <div
        className='sticky top-2 z-20 mb-1 mt-4 rounded-tl-md rounded-tr-md bg-firstColor py-0.5 shadow-shadowBox md:invisible md:hidden'
      >
        <h2 className='text-center text-xl text-white md:my-4'>
          {`${tableTitle} (${subjects.length})`}
        </h2>
      </div>
      <div className='grid grid-cols-1 gap-1.5 sm:grid-cols-2 md:hidden'>
        <TableRowsMobile subjects={subjects} />
      </div>
    </>
  )
}

export function TablesMobile ({ listOfSubjectsPerYear }) {
  return (
    listOfSubjectsPerYear
      ? listOfSubjectsPerYear.map((subjectPerYear) =>
        <ListOfTablesMobile
          key={subjectPerYear.anio}
          tableTitle={subjectPerYear.anio}
          subjects={subjectPerYear.materias}
        />
      )
      : null
  )
}
