import React, {useState,ChangeEvent} from 'react';

import HeroService from '../Services/HeroService';
import IHero from '../Types/Hero';

const AddHero: React.FC = () => {
    //creo initialstate
    const InitialHeroState = {
        Id: null,
        Name: "",
        Description: "",
        Publisher: "",
        Age: 0,
        Powers: "",
        Association: "",
        ImgUrl: ""
    }
    //creo use state, dos uno para manejr el enviado y otro para setear al heroe/heroina
    const [Hero,setHero] = useState<IHero>(InitialHeroState);
    const [submitted, setSubmitted] = useState<boolean>(false);

    //handlechange para el input
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) =>{
        const{name,value} = event.target;
        setHero({...Hero, [name]:value});
    };
    //Mapeo
    const saveHero = () =>{
        var data = {
            Id: Hero.Id,
            Name: Hero.Name,
            Description: Hero.Description,
            Publisher: Hero.Publisher,
            Age: Hero.Age,
            Powers: Hero.Powers,
            Association: Hero.Association,
            ImgUrl: Hero.ImgUrl
        };
        //mapeo de los datos con el response y manejo del envio
        HeroService.Create(data)
        .then((response: any) =>{
            setHero({
                Id: response.data.id,
                Name: response.data.name,
                Description: response.data.description,
                Publisher: response.data.publisher,
                Age: response.data.age,
                Powers: response.data.powers,
                Association: response.data.association,
                ImgUrl: response.data.imgUrl
            });
            setSubmitted(true);
            //ver la response
            console.log(response.data);
        });
    };

    const newHero = () =>{
        setHero(InitialHeroState);
        setSubmitted(false);
    };

    //se chequea el submited state, si es verdad, se muestra un botton de Add, en cambio, un form.
    return (
        <div className="submit-form">
        {submitted ? (
          <div>
            <h4>Hero submitted succefully!</h4>
            <button className="btn btn-success" onClick={newHero}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                className="form-control"
                id="Name"
                required
                value={Hero.Name}
                onChange={handleInputChange}
                name="title"
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={Hero.Description}
                onChange={handleInputChange}
                name="description"
              />
            </div>

            <div className="form-group">
              <label htmlFor="Publisher">Publisher</label>
              <input
                type="text"
                className="form-control"
                id="Publisher"
                required
                value={Hero.Publisher}
                onChange={handleInputChange}
                name="Publisher"
              />
            </div>

            <div className="form-group">
              <label htmlFor="Age">Age</label>
              <input
                type="number"
                className="form-control"
                id="Age"
                required
                value={Hero.Age}
                onChange={handleInputChange}
                name="Age"
              />
            </div>

            <div className="form-group">
              <label htmlFor="Powers">Powers</label>
              <input
                type="text"
                className="form-control"
                id="Powers"
                required
                value={Hero.Powers}
                onChange={handleInputChange}
                name="Powers"
              />
            </div>

            <div className="form-group">
              <label htmlFor="Association">Association</label>
              <input
                type="text"
                className="form-control"
                id="Association"
                required
                value={Hero.Association}
                onChange={handleInputChange}
                name="Association"
              />
            </div>

            <div className="form-group">
              <label htmlFor="Hero Image">Hero Image (Copy URL)</label>
              <input
                type="text"
                className="form-control"
                id="ImgUrl"
                required
                value={Hero.Powers}
                onChange={handleInputChange}
                name="ImgUrl"
              />
            </div>
  
            <button onClick={saveHero} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
};

export default AddHero;