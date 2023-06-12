import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const apiKey='ePyrN1QX8SD8bXPGKQt0jw9OeYy3bkT5';

const Tag = () => {
  // const [gif, setGif] = useState('');
  // const [loading, setLoading] = useState('false');
  const [tag, setTag] = useState('Dog');
 

  //async function fetchData(){
  //   setLoading(true);
  //   const url= `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${tag}`;
  //   const output = await axios.get(url);
  //   console.log(output);
  //   const imageSource= output.data.data.images.downsized_large.url;
  //   console.log(imageSource);
  //   setGif(imageSource);
  //   setLoading(false);
  // }
  // useEffect(()=>{
  //   fetchData();
  // },[]);

    const {gif, loading, fetchData} = useGif(tag);
  function clickHandler(){
    fetchData(tag);
  }

  function changeHandler(event){
    setTag(event.target.value);
  }

  return (
    <div className=' flex flex-col items-center'>
    <div className='w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='text-2xl underline uppercase font-bold mt-[15px]'>Random {tag} Gif</h1>

      {
        loading ? (<Spinner></Spinner>) : (<img src={gif} alt='gif' width={450}/>) 
      }

      <input className='bg-white w-10/12 opacity-80 text-lg py-2 rounded-lg mb-5 text-center'
      onChange={changeHandler}
      value={tag}
      >

      </input>

            

      <button className='bg-white w-10/12 opacity-80 text-lg py-2 rounded-lg mb-5' onClick={clickHandler}>
        Generate
      </button>
    </div>
    </div>
  )
}

export default Tag
