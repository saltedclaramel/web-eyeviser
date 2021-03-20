const API_HOSTS = process.env.REACT_APP_API_URL;
const WEB_HOSTS = process.env.REACT_WEB_URL;

// Image APIs
const image_get_api = API_HOSTS + '/getImage';

// Blog APIs
const blog_list_api = API_HOSTS + '/apibase/blog/getall';
const blog_get_api = API_HOSTS + '/apiwebsite/blog/get';
const blog_category_api = API_HOSTS + '/apiwebsite/category/getblogsbyslug';
const blog_random_api = API_HOSTS +  "/apibase/blog/getrandom";

// Partner APIs
const partner_get_api = API_HOSTS + '/apiwebsite/partner/getbyslug';

//Clinics APIs
const clinics_list_api = API_HOSTS + '/apiwebsite/clinic/getall';
const clinics_get_api = API_HOSTS + '/apiwebsite/clinic/getone';

//Doctor APIs
const doctor_get_api = API_HOSTS + '/apiwebsite/doctorclinic/getdoctors'

export default{
    API_HOSTS,
    WEB_HOSTS,
    blog_list_api,
    blog_get_api,
    blog_category_api,
    blog_random_api,
    partner_get_api,
    clinics_list_api,
    doctor_get_api,
    clinics_get_api,
    image_get_api
}
