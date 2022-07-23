import React,{useEffect,useState} from "react";
import "./RowPost.css";
import axios  from '../../axios';
import {imageUrl} from '../../constants/constants'

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(props.url).then((responce)=>{
      console.log(responce.data);
      setMovies(responce.data.results)
    })
  }, [])
  
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj)=>
        <img
          className={props.isSmall ? 'smallPoster' : 'poster'}
          src={`${imageUrl+obj.backdrop_path}`}
          alt="Poster"
        />
        )}
      </div>
    </div>
  );
}

export default RowPost;
