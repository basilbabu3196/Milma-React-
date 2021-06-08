import axios from 'axios';
const baseUrl = "http://localhost:8000"

                                      
                                            // L O G I N
const login = (data) => {
   
    return axios.post(baseUrl+"/login",data,{
        withCredentials: true
        
    })
}




                                           //R e g i s t e r   a n d   U p d a t e   U S E R
const register = (data) => {
    
    return axios.post(baseUrl+"/register",data, {
         withCredentials: true
     })
 }

 const editprofile = (data) => {
    
    return axios.put(baseUrl+"/editprofile",data, {
         withCredentials: true
     })
 }


   
 
                                                    //p u r c h a s e
 const purchase = (data) => {
    
    return axios.post(baseUrl+"/purchase",data, {
         withCredentials: true
     })
 }



 const editpurchase = (data) => {
    
    return axios.put(baseUrl+"/editpurchase",data, {
         withCredentials: true
     })
 }



 const resetstockpur = (data) => {
    
    return axios.post(baseUrl+"/resetstockpur",data, {
        withCredentials: true
    })
}



                                                        //S A L E S
 const sales = (data) => {
    
    return axios.post(baseUrl+"/sales",data, {
         withCredentials: true
     })
 }

 const editsales = (data) => {
    
    return axios.put(baseUrl+"/editsales",data, {
         withCredentials: true
     })
 }




 const resetstocksale= (data) => {
    
    return axios.post(baseUrl+"/resetstocksale",data, {
        withCredentials: true
    })
}


                                                         // S  T O C K
 const stock = (data1) => {
    
    return axios.post(baseUrl+"/stock",data1, {
         withCredentials: true
     })
 }



 
 

// eslint-disable-next-line import/no-anonymous-default-export
export default{
    login,
    purchase,
    stock,
    sales,
    register,
    resetstockpur,
    resetstocksale,
    editprofile,
    editpurchase,
    editsales
   // getuser

}