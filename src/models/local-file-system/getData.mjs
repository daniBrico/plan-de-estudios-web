// import { fs } from 'node:fs'

export async function getCareerByCareerName(careerName) {
  // fs.readFile('./plan-de-estudios.json', 'utf-8', (err, text) => {
  //   console.log(text)
  // })
  try {
    let res = await fetch('./data/plan-de-estudios.json'),
      listOfCareers = await res.json()

    console.log(res)

    // if (!res.ok)
    //   throw {
    //     status: res.status,
    //     statusText: res.statusText,
    //   }

    let careerSearch = null

    listOfCareers.forEach((career) => {
      if (career.nombreCarrera === careerName) careerSearch = career
    })

    return careerSearch
  } catch (err) {
    let message =
      err.statusText ||
      'Ocurrió un error al leer el archivo plan-de-estudios.json'

    console.log(err)
    // console.log(`Error ${err.status}: ${message}`)
  }
}
