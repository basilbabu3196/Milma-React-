import axios from 'axios';
const baseUrl = "http://localhost:8000"


const login = (data) => {
   
    return axios.post(baseUrl+"/login",data,{
        withCredentials: true
        
    })
}

const register = (data) => {
    
    return axios.post(baseUrl+"/register",data, {
         withCredentials: true
     })
 }
//  const getuser = (data) => {
    
//     return axios.get(baseUrl+"/getuser",data, {
//          withCredentials: true
//      })
//  }
 const stock = (data1) => {
    
    return axios.post(baseUrl+"/stock",data1, {
         withCredentials: true
     })
 }

 
//  const getuser = (data1) => {
    
//     return axios.get(baseUrl+"/getuser",data1, {
//          withCredentials: true
//      })
//  }

 const purchase = (data) => {
    
    return axios.post(baseUrl+"/purchase",data, {
         withCredentials: true
     })
 }

 

 const sales = (data) => {
    
    return axios.post(baseUrl+"/sales",data, {
         withCredentials: true
     })
 }
 
// const deposite = (data) => {
//     return axios.post(baseUrl + "/deposite",data, {
//         withCredentials: true
//     })
// }

// const withdraw = (data) => {
//     return axios.post(baseUrl + "/withdraw",data, {
//         withCredentials: true
//     })
// }
// eslint-disable-next-line import/no-anonymous-default-export
export default{
    login,
    purchase,
    stock,
    sales,
    register,
   // getuser

}