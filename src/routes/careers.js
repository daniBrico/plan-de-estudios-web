import { Router } from 'express'
import { CareerController } from '../controllers/career.js'

export const careersRouter = Router()

// Cuando este router vaya a la raíz, entonces respondemos con la función
careersRouter.get('/', CareerController.getAllCareers)

careersRouter.get('/:id', CareerController.getCareerByName)
