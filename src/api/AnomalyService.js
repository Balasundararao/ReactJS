import axios from 'axios';

class AnomalyService {

    getAllAnomalies(){
        return axios.get("https://whistlerweb-ireporter-perf.usuqo07.app.apple.com/getAllAnomalies")
    }

    getAnomalyById(id){
        return axios.get(`https://whistlerweb-ireporter-perf.usuqo07.app.apple.com/getAnomalyById/${id}`)
    }

    getAnomalyByPattern(pattern){
        return axios.get(`https://whistlerweb-ireporter-perf.usuqo07.app.apple.com/getAnomalyByPattern/${pattern}`)
    }

    getAnomalyByDate(date){
        return axios.get(`https://whistlerweb-ireporter-perf.usuqo07.app.apple.com/getAnomalyByDate/${date}`)
    }

    getAnomalyByType(type){
        return axios.get(`https://whistlerweb-ireporter-perf.usuqo07.app.apple.com/getAnomalyByType/${type}`)
    }

    getAnomalyByPatternAndDate(pattern, date){
        let config={
            headers: {
                "PATTERN": pattern
            }
        }
        return axios.get(`https://whistlerweb-ireporter-perf.usuqo07.app.apple.com/getAnomalyByPatternAndDate/${date}`, config)
    }

    getAnomalyByPatternAndDatepattern(pattern, date){
        let config={
            headers: {
                "PATTERN": pattern
            }
        }
        return axios.get(`https://whistlerweb-ireporter-perf.usuqo07.app.apple.com/getAnomalyByPatternAndDatepattern/${date}`, config)
    }

    getAnomalyByPatternAndType(pattern, type){
        let config={
            headers: {
                "PATTERN": pattern,
                "TYPE": type
            }
        }
        return axios.get(`https://whistlerweb-ireporter-perf.usuqo07.app.apple.com/getAnomalyByPatternAndType`, config)
    }

    getAnomalyByTypeAndDate(type,date){
        let config={
            headers: {
                "TYPE": type
            }
        }
        return axios.get(`https://whistlerweb-ireporter-perf.usuqo07.app.apple.com/getAnomalyByTypeAndDate/${date}`, config)
    }

    getAnomalyByPatternAndDateAndType(pattern,date,type){
        let config={
            headers: {
                "PATTERN": pattern,
                "TYPE": type
            }
        }
        return axios.get(`https://whistlerweb-ireporter-perf.usuqo07.app.apple.com/getAnomalyByPatternAndDateAndType/${date}`, config)
    }

    getAnomalyPlotById(id){
        return axios.get(`https://whistlerweb-ireporter-perf.usuqo07.app.apple.com/plot/getPlotById//${id}`)
    }

    updateAnomalyByID(id, anomaly){
        return axios.put(`https://whistlerweb-ireporter-perf.usuqo07.app.apple.com/updateAnomalyById/${id}`, anomaly)
    }

    updateAnomalyLabelById(id, anomaly){
        return axios.put(`https://whistlerweb-ireporter-perf.usuqo07.app.apple.com/updateAnomalyLabelById/${id}`, anomaly)
    }

    // getRuleBasedAnomalyById(id){
    //     axios.get(`https://whistlerweb-ireporter-perf.usuqo07.app.apple.com/api/getRuleBasedAnomalyById/${id}`, { responseType: 'json' })
    //     .then(response => {
    //         console.log(JSON.parse(response.data.anomalyContent))
    //     })
    // }

    getRuleBasedAnomalyById(id){
        return axios.get(`https://whistlerweb-ireporter-perf.usuqo07.app.apple.com/api/getRuleBasedAnomalyById/${id}`)
    }

    getAdhocEvaluationJson(whistlerAdhocEvalList){
        console.log(`whistlerAdhocEvalList - ${whistlerAdhocEvalList}`)
        console.log(`whistlerAdhocEvalList as json - ${JSON.parse(whistlerAdhocEvalList)}`)

        // let config={
        //     headers:{
        //         "Content-Type": "text/plain"
        //     },
        //     data: {whistlerAdhocEvalList}
        // }
        return axios.get(`https://whistlerweb-ireporter-perf.usuqo07.app.apple.com/api/getDummyApi`, whistlerAdhocEvalList)
    }

    postAdhocEvaluationJson(whistlerAdhocEvalList){
        console.log(`whistlerAdhocEvalList - ${whistlerAdhocEvalList}`)
        console.log(`whistlerAdhocEvalList as json - ${JSON.parse(whistlerAdhocEvalList)}`)

        // let config={
        //     headers:{
        //         "Content-Type": "text/plain"
        //     },
        //     data: {whistlerAdhocEvalList}
        // }
        // return axios.post(`https://whistlerweb-ireporter-perf.usuqo07.app.apple.com/api/postDummyApi`, whistlerAdhocEvalList, {headers:{"Content-Type": "text/plain"}})
        return axios.post(`https://whistlerweb-ireporter-perf.usuqo07.app.apple.com/api/postDummyApi`, whistlerAdhocEvalList)
    }

    postAdhocEvaluationJsonExternal(whistlerAdhocEvalList){
        return axios.post(`https://ireporter.apple.com/whistler/online/eval`, whistlerAdhocEvalList, {headers:{"Content-Type": "application/json"}})
    }


}

export default new AnomalyService();