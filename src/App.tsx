import Component from './components/component';
import components from './components/data.json';

const copyIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 lg:h-6 lg:w-6">
                  <path fillRule="evenodd" d="M10.5 3A1.501 1.501 0 009 4.5h6A1.5 1.5 0 0013.5 3h-3zm-2.693.178A3 3 0 0110.5 1.5h3a3 3 0 012.694 1.678c.497.042.992.092 1.486.15 1.497.173 2.57 1.46 2.57 2.929V19.5a3 3 0 01-3 3H6.75a3 3 0 01-3-3V6.257c0-1.47 1.073-2.756 2.57-2.93.493-.057.989-.107 1.487-.15z" clipRule="evenodd" />
                </svg>


function App() {
  
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('gkitt@utexas.edu');
  }

  return (
    <div className='flex flex-col w-full items-center justify-start px-[10px] pt-[10px] pb-[10%] bg-gray-700'>
      <div className="flex flex-row items-start justify-center w-full mb-[0.5%]">
        <div className="flex flex-col items-center justify-start w-full sm:w-[500px] lg:w-[600px] rounded-lg mt-[20px] px-[30px]">
          <div className='flex flex-row w-full items-center justify-between'>
            <h1 className='text-white font-bold text-xl lg:text-3xl text-left leading-7 lg:leading-[50px]'>Grant Kitlowski</h1>
            <button onClick={handleCopyEmail} className='text-white flex flex-row items-center justify-start gap-x-2 hover:text-gray-400'>
              <h2 className='font-semibold text-xs lg:text-lg'>email me</h2>
              {copyIcon}
            </button>
          </div>
          <div className='w-full h-[2px] bg-white mt-[2px]'/>
        </div>
      </div>
      <div className='flex flex-col items-full items-center justify-start mt-[20px] gap-y-[20px] sm:px-[60px] md:px-[100px] lg:px-[200px] xl:px-[300px] 2xl:px-[400px]'>
      {components.components.map((component, index) => <Component {...component} key={index}/>)}
      </div>
    </div>
  )
}

export default App
