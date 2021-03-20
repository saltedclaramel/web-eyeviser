import axios from 'axios';
import config from '../../config/config';

class PartnerModel {

    async get(slug){
        return axios.get(config['partner_get_api'] + "?slug=" + slug);
    }
}

export default new PartnerModel();
