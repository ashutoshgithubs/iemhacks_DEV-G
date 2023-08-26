import axios from 'axios'
 
export const axiosInstance=axios.create({});
export const apiConnect=(method,url,bodydata,headers,params)=>{
    return axiosInstance({
        method:`${method}`,
        url:`${url}`,
        data: bodydata ? bodydata : null,
        headers:headers ? headers :null,
        params:params?params:null
    })
}
