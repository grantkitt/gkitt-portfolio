import React, {useState, useEffect} from 'react';

export interface componentProps {
    primarycolor: string;
    secondarycolor: string;
    title: string;
    role: string;
    description: string;
    startdate: string;
    enddate: string;
    image: string;
    imagewidth: number;
}

export default function Component(props: componentProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const primary = `bg-[${props.primarycolor}]`
    const secondary = `text-[${props.secondarycolor}]`


    const handleClick = () => {
        setIsOpen(prev => !prev);
    }

    const handleHover = () => {
        setIsHover(prev => !prev);
    }

    return (
        
            <div onMouseEnter={handleHover} onMouseLeave={handleHover} className="shadow-lg hover:shadow-xl flex flex-col items-start justify-center px-[5%] py-[3%] cursor-pointer rounded-lg w-full lg:w-[80%] relative" style={{backgroundColor: props.primarycolor}}>
                <h1 className="text-3xl font-bold" style={{color: props.secondarycolor}}>{props.title}</h1>

                <h2 className="text-lg font-semibold italic mr-5 leading-5" style={{color: props.secondarycolor}}>{props.role}</h2>
                <h2 className="text-xs font-semibold" style={{color: props.secondarycolor}}>{props.startdate} - {props.enddate}</h2>
        
            <div className='absolute top-0 right-0 rounded-bl-full h-[80px] w-[80px]' style={{backgroundColor: props.secondarycolor}}></div> 
            <img width={`${props.imagewidth}px`} style={{top: `-50px`, right: `-${parseInt(props.imagewidth / 2)}px`}} className={`absolute ${isHover ? 'rotate-[30deg]' : 'rotate-[10deg]'} transform transition duration-100`} src={props.image} alt="" />
            </div>
    )

}

