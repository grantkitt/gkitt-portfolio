import React from 'react'
import Component from './components/component';
import components from './components/data.json';

function App() {


  return (
    <div className='flex flex-col w-screen items-center justify-start px-[1%] lg:px-[5%] pt-[2%] gap-y-20'>
      <div className="flex flex-row items-start justify-center lg:justify-start w-full mb-[5%]">
      <div className="flex flex-row items-end justify-between w-full lg:w-[45%] rounded-lg shadow-lg p-[2%]">
      <h1 className='text-black font-bold text-[6vh] text-left leading-[50px]'>Grant Kitlowski</h1>
      <a className="font-semibold text-lg text-gray-800" href="">RESUME</a>
      <a className="font-semibold text-lg text-gray-800" href="">CONTACT</a>
      </div>
      </div>
    {components.components.map((component, index) => <Component {...component} key={index}/>)}
    </div>
  )
}

export default App
