import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
const initialState={
    id: "",
    title: 'Tombstone',
    director: 'George P. Cosmatos',
    metascore: 89,
    stars: ['Kurt Russell', 'Bill Paxton', 'Sam Elliot'],
  }
export default function UpdateMovie(props) { 
    const params=useParams();
    // console.log(props)
    if(props.length===0){
        return(<h1>Loading...</h1>)
    } 
    const selectedMovie=props.movie.find((flick)=>{
            if(flick.id=params.id){
                return flick;
            }
        return selectedMovie;
    })
    console.log(selectedMovie)
   
    
    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}
