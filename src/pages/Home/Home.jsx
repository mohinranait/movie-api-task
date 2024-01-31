import { useEffect, useState } from "react";
import MoviCard from "../../components/card/MoviCard";
import "./Home.css"

const Home = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`https://api.tvmaze.com/search/shows?q=all`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setMovies(data)
        })
    },[])

    return (
        <>
            <main>
                <section>
                    <div className="container">
                        <div className="movieWrap">
                            {
                                movies?.map((movie,index) => <MoviCard key={index} index={index} movie={movie} /> )
                            }
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;