import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import Spinner from './Spinner';



const apiKey='ePyrN1QX8SD8bXPGKQt0jw9OeYy3bkT5';

const Random = () => {
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState('false');
 

  async function fetchData(){
    setLoading(true);
    const url= `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
    const output = await axios.get(url);
    console.log(output);
    const imageSource= output.data.data.images.downsized_large.url;
    console.log(imageSource);
    setGif(imageSource);
    setLoading(false);
  }
  useEffect(()=>{
    fetchData();
  },[]);

  function clickHandler(){
    fetchData();
  }


  return (
    <div className=' flex flex-col items-center'>
    <div className='w-1/2  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='text-2xl underline uppercase font-bold mt-[15px]'>A Random Gif</h1>

      {
        loading ? (<Spinner></Spinner>) : (<img src={gif} alt='gif' width={450}/>) 
      }

      

      <button className='bg-white w-10/12 opacity-80 text-lg py-2 rounded-lg mb-5' onClick={clickHandler}>
        Generate
      </button>
    </div>
    </div>
  )
}

export default Random
