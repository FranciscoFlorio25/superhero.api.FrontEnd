import axios from "axios";
//BaseUrl is a proxi to the api
export default axios.create({
    headers:{
        "Content-type": "application/json"
    }
});