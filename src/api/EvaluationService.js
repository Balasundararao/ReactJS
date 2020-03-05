import axios from 'axios';

class EvaluationService{

    getWhistlerAdhocEvalByUserId(id){
        return axios.get(`https://whistlerweb-ireporter-perf.usuqo07.app.apple.com/api/getWhistlerAdhocEvalByUserId/${id}`);
    }

}

export default new EvaluationService();