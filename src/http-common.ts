import axios from "axios";
//BaseUrl is a proxi to the api
export default axios.create({
    baseURL: "http://localhost:44309",
    headers:{
        "Content-type": "application/json"
    }
});