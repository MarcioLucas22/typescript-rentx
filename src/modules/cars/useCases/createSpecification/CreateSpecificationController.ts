import { Request, Response } from 'express'

import { CreateSpecificationUseCase } from './CreateSpecificationUseCase'

class CreateSpecificationController {
  constructor(private createCategoryUseCase: CreateSpecificationUseCase) { }

  handle(req: Request, res: Response): Response {
    const { name, description } = req.body

    this.createCategoryUseCase.execute({ name, description })

    return res.status(201).send(this.createCategoryUseCase)
  }
}

export { CreateSpecificationController }