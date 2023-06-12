import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


const apikey='ePyrN1QX8SD8bXPGKQt0jw9OeYy3bkT5';

const url = `https://api.giphy.com/v1/gifs/random?api_key=${apikey}`;


const useGif = (tag) => {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState('false');



    
  
    async function fetchData(tag){
      setLoading(true);
      
      const output = await axios.get(tag ? `${url}&tag=${tag}` : (url));
      console.log(output);
      const imageSource= output.data.data.images.downsized_large.url;
      console.log(imageSource);
      setGif(imageSource);
      setLoading(false);
    }
    useEffect(()=>{
      fetchData("car");
    },[] );

    return{gif, loading, fetchData};
  
}

export default useGif
