import { useNavigate } from "react-router-dom";
import { emailIcon } from "../components/assets";
import Component from "../components/component";
import components from "../components/data.json";

export default function HomeScreen() {
    const navigate = useNavigate();
    return (
        <div className='flex w-full flex-col items-center justify-start px-[10px] pb-[10%] pt-[10px]'>
            <div className='mb-[0.5%] flex w-full flex-row items-start justify-center'>
                <div className='mt-[20px] flex w-full flex-col items-center justify-start rounded-lg px-[30px] sm:w-[500px] lg:w-[600px]'>
                    <div className='flex w-full flex-row items-center justify-between'>
                        <h1 className='text-left text-xl font-bold leading-7 text-white lg:text-3xl lg:leading-[50px]'>
                            Grant Kitlowski
                        </h1>
                        <button
                            onClick={() => navigate("/email")}
                            className='flex flex-row items-center justify-start gap-x-2 text-white hover:text-gray-400'
                        >
                            <h2 className='text-xs font-semibold lg:text-lg'>email me</h2>
                            <div className='h-[20px] w-[20px]'>{emailIcon}</div>
                        </button>
                    </div>
                    <div className='mt-[2px] h-[2px] w-full bg-white' />
                </div>
            </div>
            <div className='items-full mt-[20px] flex flex-col items-center justify-start gap-y-[20px] sm:px-[60px] md:px-[100px] lg:px-[200px] xl:px-[300px] 2xl:px-[400px]'>
                {components.components.map((component, index) => (
                    <Component {...component} key={index} />
                ))}
            </div>
        </div>
    );
}
