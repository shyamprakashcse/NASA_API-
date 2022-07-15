import React, { useState } from 'react'
import axios from 'axios';
import "./Movie.css"
function Movie() { 
    
    let [Nasa,setNasa] = useState([])
    // let API_KEY_1 = "Q2nl8DAGxHH3HsurKgOLVBucxDd7Y1gkhwIHCUXr" 
    let API_KEY_2 = "nPbHaDI0dvLvWZOf8gK3iFKgTwSQX0LPav1ddfcG"
    React.useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?count=10&api_key=${API_KEY_2}`).then((response) => {
         console.log(response.data);
         setNasa(response.data); 
        });
      }, []);

      
 
    
        return <div>
                  <h3 className="card-header text-center headings">NASA ASTRONOMY PICTURES OF THE DAY</h3>  
                  <div className='grid gridpat'>
                    {
                        Nasa.map((item,ind)=>{
                            return (
                            
                                <div className="card box-shadow " key={ind}>
                                <h1 className="card-title titler text-center card-header">{item.title}</h1>
  <img className='card-img-top cardimg card-header box-shadow' src={item.hdurl} alt='cardimg'></img>
  <div class="card-body cardcontent">
   
    <h4 class="card-text card-footer explanation">{item.explanation}</h4>
   
  </div>

  <h3 className='card-footer text-center foot'>Copyright @{new Date().getFullYear()} ShyamPrakash.cse</h3>
</div> 

                            )
                        })
                    }
                  </div>
              </div> 
       
}

export default Movie