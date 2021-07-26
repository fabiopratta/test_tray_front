import Axios from 'axios';

export default {

    incluir:(dadosVendas) => {
        return Axios.post('venda', dadosVendas);
    }
}