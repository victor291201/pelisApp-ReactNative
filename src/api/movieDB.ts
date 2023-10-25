import axios from "axios";

const movieDB = axios.create({
    baseURL:"https://api.themoviedb.org/3/movie",
    params:{
        api_key:"e682c9afbf001270090b8d5e455493e8",
        language:"es-ES",
        page:1
    }
})
export default movieDB;