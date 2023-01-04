import React, { useState, useEffect, ChangeEvent } from "react";
import HeroService from "../Services/HeroService";
import IHero from '../Types/Hero';
import { Link } from "react-router-dom";

const HeroList: React.FC = () => {
    const [Hero, setHero] = useState<Array<IHero>>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(-1);
    const [currentHero, setCurrentHero] = useState<IHero | null>(null);
    const [searchName, setSearchName] = useState<string>("");

    useEffect(() => {
        retrieveHero();
    },[]);

    const OnChangeSearchName = (e: ChangeEvent<HTMLInputElement>) =>{
        const searchName = e.target.value;
        setSearchName(searchName);
    };

    const retrieveHero = () => {
        HeroService.GetAll().then((response: any) => {
            setHero(response.data);
            console.log(response.data);
        });
    };

    const refreshList = () => {
        retrieveHero();
        setCurrentHero(null);
        setCurrentIndex(-1);
    };

    const setActiveHero = (hero: IHero, index: number) => {
        setCurrentHero(hero);
        setCurrentIndex(index);
    }

    const findByName = () => {
        HeroService.GetByName(searchName)
        .then((response: any) => {
            setHero(response.data);
            setCurrentHero(null);
            setCurrentIndex(-1);
            console.log(response.data);
        })
    };

    return(
        <div className="list row">
            <div className="col-md-8">
                <div className="input-group mb-3">
                    <input type="text"
                     className="form-control"
                     placeholder="Search by Name"
                     value={searchName}
                     onChange={OnChangeSearchName}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary"
                        type="button"
                        onClick={findByName}>Seach
                        </button>
                    </div>"
                </div>
            </div>
            <div className="col-mb-6">
                <h4>Hero List</h4>
                <ul className="list-group">
                    {
                        Hero && Hero.map((hero,index) =>(
                        <li 
                        className={"list-group-item" + (index == currentIndex ? "active": "")}
                        onClick={() => setActiveHero(hero,index)}
                        key={index}>
                        </li>
                        ))
                    }
                </ul>
            </div>
            <div className="col-mb-6">
                {currentHero ?(
                    <div>
                        <h4>Hero</h4>
                        <div>
                            <label>
                                <strong>Name:</strong>
                            </label>{" "}
                            {currentHero.Name}
                        </div>
                        <div>
                            <image href={currentHero.ImgUrl}/>
                        </div>
                        <div>
                            <label>
                                <strong>Description:</strong>
                            </label>{" "}
                            {currentHero.Description}
                        </div>
                        <div>
                            <label>
                                <strong>Publisher:</strong>
                            </label>{""}{currentHero.Publisher}
                        </div>
                        <div>
                            <label>
                                <strong>Age:</strong>
                            </label>{0}{currentHero.Age}
                        </div>
                        <div>
                            <label>
                                <strong>Powers:</strong>
                            </label>{" "}{currentHero.Powers}
                        </div>
                        <div>
                            <label>
                                <strong>Association:</strong>
                            </label>{" "}{currentHero.Association}
                        </div>

                        <Link to={"/Hero/"+ currentHero.Id}
                        className="badge badge-warning"> Edit</Link>
                    </div>
                ) : (
                    <div>
                        <br>
                            <p>Please Click on a Hero</p>
                        </br>
                    </div>
                )}
            </div>
        </div>
    );
}

export default HeroList;