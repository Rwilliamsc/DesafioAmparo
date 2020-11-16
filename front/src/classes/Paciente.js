import Modelo from './Modelo'

export default class Paciente extends Modelo {
  constructor(){
    super()
    this.cpf = ''
    this.nome = ''
  }
}