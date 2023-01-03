import http from "../http-common";
import IHero from "../Types/Hero";



const GetAll = () =>{
    return http.get<Array<IHero>>("/SuperHero");
}

const Create = (data: IHero) => {
    return http.post<IHero>("/SuperHero",data);
}

const Update= (id: any, data: IHero) => {
    return http.put<IHero>("/SuperHero/${id}",data);
};

const Remove = (id: any) => {
    return http.delete<any>("/SuperHero/${id}");
};

const HeroService = {
    GetAll,
    Create,
    Update,
    Remove,
}

export default HeroService;