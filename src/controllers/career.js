import { CareerModel } from '../models/local-file-system/career.js'

export class CareerController {
  static getCareerByName = async function (req, res) {
    const { id } = req.params,
      career = await CareerModel.getCareerByName(id)

    // console.log(req.params)
    // console.log(id)

    res.json(career)
  }

  static getAllCareers = async function (req, res) {
    const allCareers = await CareerModel.getAllCareers()
    res.json(allCareers)
  }
}
