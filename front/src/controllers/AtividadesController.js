import Controller from "./Controller";

export default class AtividadesController extends Controller {

  async BuscarAtividades(){
    return this.rest.get(`/atividades`)
  }

  async gravarAtividade(dados){
    return this.rest.post('/atividades', dados)
  }
}