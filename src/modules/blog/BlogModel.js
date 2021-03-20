import axios from 'axios';
import config from '../../config/config';

class BlogModel {

    async list(){
        return axios.get(config['blog_list_api']);
    }

    async get(slug){
        return axios.get(config['blog_get_api'] + "/" + slug);
    }

    async category(slug){
        return axios.get(config['blog_category_api'] + "/" + slug);
    }

    async random(){
        return axios.get(config['blog_random_api']);
    }
}

export default new BlogModel();
