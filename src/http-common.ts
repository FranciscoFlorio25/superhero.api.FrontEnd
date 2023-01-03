import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:44309",
    headers:{
        "Content-type": "application/json"
    }
});