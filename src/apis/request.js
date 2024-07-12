import axios from "axios";
import {message} from 'ant-design-vue';
import Token from '@/utils/token.js';


export default (args) => {
    Object.assign(args, {
        headers:{
            Token: Token.getToken()
        }
    });
    return new Promise((resolve, reject) => {
        axios.request(args).then(response => {
            const data = response.data;
            if(data.code == 200){
                resolve(data.data);
            }else {
                console.error("code error!");
                message.error("code error:" + data.code);
                reject();
            }
        }).catch(err => {
            reject(err);
        });
    })
}