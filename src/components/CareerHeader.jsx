export function CareerHeader ({
  careerName,
  careerDuration,
  subCareerName,
  subCareerDuration,
  loading
}) {
  return (
    <div className='mx-auto flex max-w-4xl flex-col gap-4 sm:flex-row sm:items-center lg:gap-8'>
      <div className={`order-1 flex flex-col justify-center lg:flex-row lg:items-center lg:gap-4 ${loading ? 'hidden invisible' : ''}`}>
        <div>
          <h1
            className='mt-1 text-pretty text-2xl font-extrabold tracking-wide text-white lg:mt-0'
            id='titleCareer'
          >
            {careerName}
          </h1>
          <p className='text-sm text-white' id='careerDuration'>
            {`DURACIÓN: ${careerDuration} AÑOS`}
          </p>
        </div>
        <div>
          <h2
            className='mt-0.5 text-xl font-extrabold tracking-wide text-white lg:mt-0 lg:text-2xl'
            id='subCareer'
          >
            {subCareerName}
          </h2>
          <p className='lg:text-md text-sm text-white' id='subCareerDuration'>
            {`DURACIÓN: ${subCareerDuration} AÑOS`}
          </p>
        </div>
      </div>
      <div className='order-0 mx-auto sm:mx-0'>
        <a
          href='https://www.uno.edu.ar/'
          target='_blank'
          rel='noreferrer noopener'
        >
          <img
            className='hidden w-28 sm:block sm:w-24'
            src='../src/assets/logoUNO.svg'
            alt='Logo de la Universidad Nacional del Oeste'
          />
          <span className='inline-block border-y-2 text-center text-3xl font-extrabold tracking-wide text-white sm:hidden'>
            UNO
          </span>
        </a>
      </div>
    </div>
  )
}
