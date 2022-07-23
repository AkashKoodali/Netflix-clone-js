import React,{useEffect,useState} from "react";
import YouTube from "react-youtube";
import "./RowPost.css";
import axios  from '../../axios';
import {API_KEY, imageUrl} from '../../constants/constants'

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('');
  useEffect(() => {
    axios.get(props.url).then((responce)=>{
      console.log(responce.data);
      setMovies(responce.data.results)
    })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const  handleMovie= (id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(responce=>{
      if(responce.data.results.length!==0){
        setUrlId(responce.data.results[0])
      }else{
        console.log('Array is Empty')
      }
    })
  }
  
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj)=>
        <img
          onClick={()=>handleMovie(obj.id)}
          className={props.isSmall ? 'smallPoster' : 'poster'}
          src={`${imageUrl+obj.backdrop_path}`}
          alt="Poster"
        />
        )}
      </div>
     { urlId && <YouTube opts={opts} videoId={urlId.key}/>}
    </div>
  );
}

export default RowPost;
