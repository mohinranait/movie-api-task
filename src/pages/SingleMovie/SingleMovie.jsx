import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./SingleMovie.css"

const SingleMovie = () => {
    const [movie, setMovie] = useState({});
    const {id}= useParams();
    const [plainTextSummary, setPlainTextSummary] = useState('');

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}`)
        .then(res => res.json())
        .then(data => {
            setMovie(data)
        })
    },[])


 

  useEffect(() => {
    const parser = new DOMParser();
    const parsedDocument = parser.parseFromString(movie?.summary, 'text/html');
    const textContent = parsedDocument.body.textContent || '';
    setPlainTextSummary(textContent);
  }, [movie]);

    return (
        <>
            <section className="my-4">
                <div className="container ">
                    <div className="detailsMovieWrap bg-black">
                        <div className="imgCard">
                            <img src={movie?.image?.original} alt="" />
                        </div>
                        <div className="contentWrap">
                            <div className="contentDiv">
                                {
                                    movie?.schedule?.time && movie?.schedule?.days?.length > 0 &&   <p className="schedule"> {movie?.schedule?.days.map(item => <span key={item}>{item},</span> )} - {movie?.schedule?.time}</p>
                                }
                              
                                <p className="dName">{movie?.name}  </p> 
                                <p className="rating">Rating:{ movie?.rating?.average}</p>
                                <p className="starring">Starring: {movie?.genres?.map(item => <span key={item}>{item},</span> )} </p>
                                <div className="contentDescripton">
                                    { plainTextSummary }
                                </div>
                                <p className="officialWeb">Official website: <Link to={movie?.network?.officialSite}>Visite</Link>  </p>
                                <div>
                                    <Link className="btn btn-primary" to={`/checkout/${movie?.id}`}>Booking ticket</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
        </>
    );
};

export default SingleMovie;