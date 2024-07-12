import request from "./request.js"
import webconfig from "@/webconfig.js";
const url = webconfig.back_host;


/**
 * 将（表单中）要添加的房屋信息发送到后端
 * @param {*} name  房源名 
 * @param {*} owner_name  房东姓名
 * @param {*} phone 房东电话
 * @param {*} money 租金
 * @param {*} deposit 押金
 * @param {*} status 状态（是否被出租）
 * @param {*} method 整租 or 合租
 * @param {*} region 区域
 * @param {*} type 
 * @param {*} desc 
 * @returns 
 */

const Addhouse = (house) => {
    return request({
        url: url + "/house/add",
        method:"POST",
        data:{
            house
        }
    })
}



export default {
    Addhouse
}