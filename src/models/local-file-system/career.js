import { readJSON } from '../../../utils/utils.js'

const careers = readJSON(
  '../src/models/local-file-system/plan-de-estudios.json',
)

export class CareerModel {
  static getCareerByName = async function (id) {
    let careerSearch = null

    if (typeof id === 'string') id = parseInt(id)

    careers.forEach((career) => {
      if (career.id === id) careerSearch = career
    })

    return careerSearch
  }

  static getAllCareers = async function () {
    return careers
  }
}
