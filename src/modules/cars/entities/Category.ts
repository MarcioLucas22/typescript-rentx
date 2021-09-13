import { v4 as uuidV4 } from 'uuid'
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'

@Entity("categories")
class Category {
  // Ponto de interrogação significa que o parâmetro não é obrigatório de ser usado
  @PrimaryColumn()
  id?: String

  @Column()
  name: String

  @Column()
  description: String

  @CreateDateColumn()
  createdAt: Date

  constructor() {
    if(!this.id) {
      this.id = uuidV4()
    }
  }
}

export { Category }