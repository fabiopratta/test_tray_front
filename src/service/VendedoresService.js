import Axios from 'axios'; 

export default {

    listar:() => {
        return Axios.get('vendedor');
    },
    incluir:(dadosVendedor) => {
        return Axios.post('vendedor', dadosVendedor);
    },
    apagar:(id) => {
        return Axios.delete('vendedor/'+id);
    },
    pegarUm:(id) => {
        return Axios.get('vendedor/'+id);
    },
    atualizar:(dadosVendedor) => {
        return Axios.put('vendedor/'+dadosVendedor.id, dadosVendedor);
    }


}