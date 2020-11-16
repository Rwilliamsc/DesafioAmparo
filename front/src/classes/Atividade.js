import Modelo from './Modelo'
import Paciente from './Paciente'

export default class Atividade extends Modelo {
  constructor(){
    super()
    this.paciente = new Paciente()
    this.dataVencimento = ''
    this.status = ''
    this.atividade = ''
  }
}