import Modelo from './Modelo'

export default class ListaAtividades extends Modelo {
  constructor(){
    super()
    this.itens = []

  }

  set lista (atividades) {
    atividades.forEach(atividade => {
      this.itens.push(this.getAtividade(atividade))
    });
  }

  getAtividade(atividade) {
    
    const obj = {
      paciente: atividade.paciente.nome,
      cpf: atividade.paciente.cpf,
      data: atividade.dataVencimento ? atividade.dataVencimento.substr(0, 10).split('-').reverse().join('/') : '',
      status: atividade.status,
      atividade: atividade.atividade
    }

    return obj
  }


}