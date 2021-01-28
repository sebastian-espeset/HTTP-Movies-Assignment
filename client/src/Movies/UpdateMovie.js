import Axios from 'axios';
import React from 'react';
import { useEffect,useState } from 'react';
import { useParams,useHistory } from 'react-router-dom';
import axios from 'axios';


export default function UpdateMovie(props) {
    const { push } = useHistory(); 
    const params=useParams();
    const [movieData, setMovieData]= useState({
        id: '',
        title: '',
        director: '',
        metascore: '',
        stars:["Marlon Brando", "Al Pacino", "Robert Duvall"]
      })
    //   console.log(props)
    const [formData, setFormData]=useState(movieData)
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/movies/${params.id}`)
            .then((res)=>{
                setMovieData(res.data)
            })
            .catch(err=>console.log(err))
    },[])

    const handleInputChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
            stars:movieData.stars
        })
    }
    const handleUpdateSubmit=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:5000/api/movies/${params.id}`,formData)
            .then((res)=>{
                props.setMovieList(res.data)
                push('/')
            })
            .catch((err)=>{
                console.log(err.message)
            })
    }
    
    return (
        <div>
            <form style={{display:'flex', justifyContent:'center'}} onSubmit={handleUpdateSubmit}>
                <input name='title' value={formData.title} placeholder="title"  onChange={handleInputChange}/>
                <br></br>
                <input name='director' value={formData.director} placeholder="director"  onChange={handleInputChange}/>
                <br></br>
                <input name='metascore' value={formData.metascore} placeholder="metascore"  onChange={handleInputChange}/>
                <br></br>
                <button>Submit changes </button>
            </form>
        </div>
    )
}
