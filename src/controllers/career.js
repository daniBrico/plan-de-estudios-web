import { CareerModel } from '../models/local-file-system/career.js'

export class CareerController {
  static getCareerByName = async function (req, res) {
    const { id } = req.params,
      career = await CareerModel.getCareerByName(id)

    res.header('Access-Control-Allow-Origin', '*')

    res.json(career)
  }

  static getAllCareers = async function (req, res) {
    const allCareers = await CareerModel.getAllCareers()
    res.header('Access-Control-Allow-Origin', '*')
    res.json(allCareers)
  }
}
