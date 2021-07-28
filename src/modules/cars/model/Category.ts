import { v4 as uuidV4 } from 'uuid'

class Category {
  // Ponto de interrogação significa que o parâmetro não é obrigatório de ser usado
  id?: String
  name: String
  description: String
  createdAt: Date

  constructor() {
    if(!this.id) {
      this.id = uuidV4()
    }
  }
}

export { Category }