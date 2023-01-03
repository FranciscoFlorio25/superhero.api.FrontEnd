import React, {useState,ChangeEvent} from 'react';

import HeroService from '../Services/HeroService';
import IHero from '../Types/Hero';

const AddHero: React.FC = () => {
    
    const InitialHeroState = {
        Id: null,
        Name: "",
        Description: "",
        publisher: "",
        Age: 0,
        powers: "",
        Association: "",
        ImgUrl: ""
    }

    const [Hero,setHero] = useState<IHero>(InitialHeroState);
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) =>{
        const{name,value} = event.target;
        setHero({...Hero, [name]:value});
    };

    const saveHero = () =>{
        var data = {
            Name: Hero.Name,
            Description: Hero.Description,
            publisher: Hero.publisher,
            Age: Hero.Age,
            powers: Hero.powers,
            Association: Hero.Association,
            ImgUrl: Hero.ImgUrl
        };
        
    };

   

    }

    return (<div></div>);
};

export default AddHero;