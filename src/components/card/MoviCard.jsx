/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import "./MoviCard.css"
const MoviCard = ({movie,index}) => {
    // console.log(movie);
    const {show} = movie;
    const {name,image,genres,id,network} = show;
    if(index == 4){
        return ;
    }
    return (
        <>
            <Link to={`/movie/${id}`} className="mb-5 moviCard">
                <div>
                    <div>
                        <img src={image?.medium} alt="" />
                    </div>
                    <div>
                        <p className="movieGenres">{genres?.map((item,index) => <span key={index}>{item},</span> )}</p>
                        <p className="movieName">{name}</p>
                        <p className="movieNetwordName">{network?.name}</p>
                    </div>
                </div>
            </Link>  
        </>
    );
};

export default MoviCard;