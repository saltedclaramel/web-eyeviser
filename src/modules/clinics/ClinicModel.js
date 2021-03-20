import axios from 'axios';
import config from '../../config/config';

class ClinicModel {
    async list(){
        return axios.get(config['clinics_list_api']);
    }

    async get(slug){
        return axios.get(config['clinics_get_api'] + "/" + slug);
    }
}

export default new ClinicModel();