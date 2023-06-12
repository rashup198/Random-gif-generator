import React from 'react';
import Random from './components/Random';
import Tag from './components/Tag';


export default function App() {
  return(
    <div className="w-full max-h-screen flex flex-col background ">
      <h1 className="bg-white rounded-lg  w-11/12 text-center ml-[50px] mt-5 items-center text-lg font-bold ">RANDOM GIFS</h1>
      <div className="Flex flex-col items-center justify-center gap-y-10 mt-[30px] background">
        <Random/>
        <Tag></Tag>
        
      </div>
    </div>
  )
} 
