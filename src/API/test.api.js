import axios from "axios";
let baseurl_LAN  = 'https://lichess.org/api/user/Sahil_kadian';

const ApiCollections = 
{
    fetchDetails:function(){
        return axios({
            "method" : "GET",
            "url" : `${baseurl_LAN}/list`,
            "headers" : {
                "content-type" : "application/json",
                "Authorization": 'Bearer lip_cbWaftQQ0fgm6yd6fnhV',

            }
        })
    },
    
}
export default ApiCollections;