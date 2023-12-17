import Component from './components/component';
import components from './components/data.json';

function App() {


  return (
    <div className='flex flex-col w-full items-center justify-start lg:px-[5%] pt-[2%] gap-y-10 lg:gap-y-14 pb-[10%]'>
      <div className="flex flex-row items-start justify-center w-full mb-[0.5%]">
        <div className="flex flex-row items-end shadow-xl bg-blue-100 justify-between w-full lg:w-[55%] rounded-lg p-[4%]">
          <h1 className='text-black font-bold text-2xl lg:text-[6vh] text-left leading-7 lg:leading-[50px]'>Grant Kitlowski</h1>
          <a className="font-semibold text-xs lg:text-lg text-gray-800" href="mailto:gkitt@utexas.edu" target="_top">grant.kitlowski@gmail.com</a>
        </div>
      </div>
    {components.components.map((component, index) => <Component {...component} key={index}/>)}
    </div>
  )
}

export default App
