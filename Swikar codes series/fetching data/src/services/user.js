import axios from "axios";
// creating the axios instance
const API = axios.create({
  baseURL: 'https://684ed963f0c9c9848d294d27.mockapi.io/',
  timeout: 3000,
  
});



async function getUserData() {
    // const url = "https://684ed963f0c9c9848d294d27.mockapi.io/users"
    const resource = "users"
    try {

        const response = await API.get(resource)
        console.log(response.data);
        return response.data
    } catch (err) {
        console.log("Error in fetching the data: " + err)
    }
}

async function createUser(payload){
   const resource = 'users' 
   try{
    
    const response = await API.post(resource,payload);
    return response.data;
   }catch(e){
    console.log("error in fetching the user" + e);
   }
}








// this is named export in which {exported named} in app.js
// eg: import {getUserData} from './services/user';  where {destructuring is needed}
export {getUserData, createUser};

// this is default export
// export default getUserData;
// import getUserData from './services/user';