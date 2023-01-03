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

};

export default AddHero;