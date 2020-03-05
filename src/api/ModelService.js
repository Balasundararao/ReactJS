import axios from 'axios';

class ModelService {

    getModelById(name){
        return axios.get(`https://whistlerweb-ireporter-perf.usuqo07.app.apple.com/api/getModelByName/${name}`)
    }

}

export default new ModelService();