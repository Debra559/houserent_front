import request from "./request.js"
import webconfig from "@/webconfig.js";
const url = webconfig.back_host;




const SearchOwnerInfoList = (name) => {
    return request({
        url: url + "/user/SearchOwners",
        method:"POST",
        data:{
           name
        }
    })
}



export default {
    SearchOwnerInfoList
}