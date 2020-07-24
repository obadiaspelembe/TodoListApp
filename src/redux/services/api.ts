import axios from 'axios';

/**
 * Configurando o axios para fazer todos os pedidos no baseUrl indicado
 */
export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});
