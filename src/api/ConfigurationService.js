import axios from 'axios';

class ConfigurationService {

    getAllConfiguration() {
        return axios.get("https://whistlerweb-ireporter-perf.usuqo07.app.apple.com/api/getAllKpiMetadata")
    }

    getConfigurationById(id) {
        return axios.get(`https://whistlerweb-ireporter-perf.usuqo07.app.apple.com/api/getKpiMetadataById/${id}`)
    }

    getConfigurationListByAppName(appName){
        return axios.get(`https://whistlerweb-ireporter-perf.usuqo07.app.apple.com/api/getConfigListByAppName/${appName}`)
    }

    updateConfigurationById(id, config) {
        return axios.put(`https://whistlerweb-ireporter-perf.usuqo07.app.apple.com/api/updateConfig/${id}`, config)
    }

    deleteConfigurationById(id) {
        return axios.delete(`https://whistlerweb-ireporter-perf.usuqo07.app.apple.com/api/deleteConfig/${id}`)
    }

    getConfigurationGroups(){
        return axios.get("https://whistlerweb-ireporter-perf.usuqo07.app.apple.com/api/getAllConfigGroups")
    }

    getConfigurationGroupByAppName(appName){
        return axios.get(`https://whistlerweb-ireporter-perf.usuqo07.app.apple.com/api/getConfigGroup/${appName}`)
    }

    getConfigurationByPattern(pattern){
        return axios.get(`https://whistlerweb-ireporter-perf.usuqo07.app.apple.com/api/getKpiMetadataByPattern/${pattern}`)
    }

}

export default new ConfigurationService();