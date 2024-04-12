import { useEffect, useState } from 'react'
import { CareerHeader } from './components/CareerHeader'
import { TableDesktop } from './components/TableDesktop'

export function App () {
  const [career, setCareer] = useState(null)

  useEffect(() => {
    fetch('http://localhost:1234/careers/1')
      .then((res) => res.json())
      .then((career) => {
        setCareer(career)
      })
  }, [])

  return (
    <>
      <header className='bg-fourthColor px-4 py-2 shadow-shadowSelect'>
        <CareerHeader
          careerName={career?.nombre ?? ''}
          careerDuration={career?.duracion ?? ''}
          subCareerName={career?.tituloIntermedio ?? ''}
          subCareerDuration={career?.duracionDelTituloIntermedio ?? ''}
        />
      </header>

      <main>
        <h2 className='mx-auto mt-2 text-center text-2xl font-semibold text-firstColor md:text-3xl'>
          Plan de Estudios
        </h2>
        <article className='m-auto max-w-4xl px-4 lg:flex lg:flex-col lg:items-center lg:px-0'>
          {
            career != null
              ? career.listaDeMateriasPorAnio.map((subjectForYear) =>
                <TableDesktop
                  key={subjectForYear.anio}
                  careerYear={subjectForYear.anio}
                  subjects={subjectForYear.materias}
                />
              )
              : null
          }
        </article>
      </main>
    </>
  )
}
