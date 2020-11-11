import axios from 'axios'

export default class Controller{
  constructor () {}

  // --------------------------------------
  // rest
  // --------------------------------------
  get rest () {
    return axios.create({
      baseURL: 'http://localhost:4000',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
  }
}
