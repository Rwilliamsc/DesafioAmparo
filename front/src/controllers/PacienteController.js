import Controller from "./Controller";

export default class PacienteController extends Controller {

  async buscarPaciente(dado){
    return this.rest.get(`/paciente/filtro?valor=${dado}`)
  }

  async gravarPaciente(dados){
    return this.rest.post('/paciente', dados)
  }
}