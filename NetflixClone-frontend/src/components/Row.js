import React,{useState,useEffect} from 'react'
import axios from '../axios'
import '../assets/Row.scss'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'



const base_images_url = "https://image.tmdb.org/t/p/w500"

export default function Row({title, fetchUrl, isLargeRow}) {
    const [movies,setMovies]=useState([])
    const [trailerUrl,setTrailerUrl] = useState("")

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request
        }
        fetchData();
    },[fetchUrl]);
    
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    }

    const handleClick  = (movie) =>{
        console.log(movies)
        if(trailerUrl){
            setTrailerUrl("");
        }else{
            movieTrailer(movie?.name || movie?.original_title || "" )
            //console.log("we are line two");
            /*movieTrailer( null, { tmdbId: 161 } )*/
            .then ((url) =>{
                // https:// www.youtube.com/watch?v=(the video)
                const urlParams = new URLSearchParams (new URL(url).search);
                console.log("url", url)
                console.log(urlParams)
                setTrailerUrl(urlParams.get("v"));
            })
            .catch(error => console.log(error))
        }
    }
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters" >
                {movies.map(movie =>(
                    <img
                    key={movie.id}
                    onClick={() => handleClick(movie)}
                    className={`row_poster ${isLargeRow && "row_posterLarge"} `}
                     src={`${base_images_url}/${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name || movie.original_title} />
                ))}

            </div>
            {trailerUrl && < Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}
