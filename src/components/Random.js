import axios from 'axios';
import React from 'react'
import { useState } from 'react'


const apiKey='ePyrN1QX8SD8bXPGKQt0jw9OeYy3bkT5';

const Random = () => {
  const [gif, setGif] = useState('');
 

  async function fetchData(){
    const url= `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

    const output = await axios.get(url);
    console.log(output);
  }

  function clickHandler(){

  }


  return (
    <div className=' flex flex-col items-center'>
    <div className='w-1/3 h-[450px] bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='text-2xl underline uppercase font-bold'>A Random Gif</h1>

      <img src={gif} alt='gif' width={450}/> 

      <button className='bg-white w-10/12 opacity-80 text-lg py-2 rounded-lg' onClick={clickHandler}>
        Generate
      </button>
    </div>
    </div>
  )
}

export default Random
