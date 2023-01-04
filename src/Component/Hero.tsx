import React, { useState, useEffect, ChangeEvent } from "react";
import { useParams, useNavigate } from 'react-router-dom';

import HeroService from "../Services/HeroService";
import IHero from "../Types/Hero";

const Hero: React.FC = () =>{
    const {id} = useParams();
    let navigate = useNavigate();

    const initialHeroState = {
        Id: null,
        Name: "",
        Description: "",
        Publisher: "",
        Age: 0,
        Powers: "",
        Association: "",
        ImgUrl: "" 
    };

    const [currentHero, setCurrentHero] = useState<IHero>(initialHeroState)
    const [message, setMessage] = useState<string>("");

    const getHero = (id: string) => {
        HeroService.GetById(id).then((response: any) =>{
            setCurrentHero(response.data);
            console.log(response.data);
        });
    };

    useEffect(() => {
        if(id)
            getHero(id);
    }, [id]);

    //agregamos typeassertion a event.target ya que debemos marcar que es un HTML element
    const handleInputChange = (event: ChangeEvent) => {
        const {name, value} = event.target as HTMLInputElement;
        setCurrentHero({...currentHero, [name] : value});
    };

    const updateHero = () => {
        HeroService.Update(currentHero.Id, currentHero)
        .then((response: any) =>{
            console.log(response.data);
            setMessage("The Hero was update updated successfully!");
        });
    };

    const deleteHero = () => {
        HeroService.Remove(currentHero.Id)
        .then((response: any) => {
            console.log(response.data);
            navigate("/Heros");
        });
    };

    return(<div>
        {currentHero ? (
            <div className="edit-form">
                <h4>Hero</h4>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={currentHero.Name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            name="description"
                            value={currentHero.Description}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="publisher">Publisher</label>
                        <input
                            type="text"
                            className="form-control"
                            id="publisher"
                            name="publisher"
                            value={currentHero.Publisher}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input
                            type="number"
                            className="form-control"
                            id="age"
                            name="age"
                            value={currentHero.Age}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="powers">Powers</label>
                        <input
                            type="text"
                            className="form-control"
                            id="Powers"
                            name="Powers"
                            value={currentHero.Powers}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="association">Association</label>
                        <input
                            type="Text"
                            className="form-control"
                            id="Association"
                            name="Association"
                            value={currentHero.Association}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imgurl">URL Image</label>
                        <input
                            type="text"
                            className="form-control"
                            id="imgurl"
                            name="imgurl"
                            value={currentHero.ImgUrl}
                            onChange={handleInputChange}
                        />
                    </div>
                </form>
                <button className="btn btn-danger" onClick={deleteHero}>Delete</button>
                <button className="btn btn-primary" onClick={updateHero}>Update</button>
            </div>
        ) : (
            <div>
                <br>
                    <p>Please click in a hero</p>
                </br>
            </div>
        )}
    </div>)
}


export default Hero;