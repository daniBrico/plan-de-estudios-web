// import { useState } from 'react'
import { CareerHeader } from './components/CareerHeader'
import { TablesMobile } from './components/TableMobile'
import { TablesDesktop } from './components/TableDesktop'
import { useFetch } from './hooks/useFetch'

export function App () {
  const { data: careers, loading } = useFetch({ url: 'http://localhost:1234/careers/1' })

  return (
    <>
      <header className='bg-fourthColor px-4 py-2 shadow-shadowSelect'>
        {
          careers !== null
            ? <CareerHeader
                careerName={careers.nombre}
                careerDuration={careers.duracion}
                subCareerName={careers.tituloIntermedio}
                subCareerDuration={careers.duracionDelTituloIntermedio}
                loading={loading}
              />
            : null
        }
      </header>

      <main>
        <h2 className='mx-auto mt-2 text-center text-2xl font-semibold text-firstColor md:text-3xl'>
          Plan de Estudios
        </h2>
        <article className='m-auto max-w-4xl px-4 lg:flex lg:flex-col lg:items-center lg:px-0'>
          {
            careers !== null
              ? <TablesDesktop listOfSubjectsPerYear={careers.listaDeMateriasPorAnio} />
              : null
          }
          {/* {
            careers !== null
              ? <TablesMobile listOfSubjectsPerYear={careers.listaDeMateriasPorAnio} />
              : null
          } */}
        </article>
      </main>
    </>
  )
}
