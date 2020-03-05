import axios from 'axios';

class PlotService {

    getPlotById(id){
        return axios.get(`http://localhost:8080/plot/getPlotById/${id}`)
    }

}

export default new PlotService();