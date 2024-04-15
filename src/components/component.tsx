import { useState } from "react";

export interface componentProps {
    primarycolor: string;
    secondarycolor: string;
    title: string;
    role: string;
    description: string;
    skills: string[];
    startdate: string;
    enddate: string;
    image: string;
    imagewidth: number;
}

export default function Component(props: componentProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isHover, setIsHover] = useState(false);

    const handleClick = () => {
        setIsOpen(prev => !prev);
    };

    const handleHover = () => {
        setIsHover(prev => !prev);
    };

    const makeSkillString = () => {
        let skillString = "";
        props.skills.forEach(skill => {
            if (skill === props.skills[props.skills.length - 1]) {
                skillString += skill;
                return;
            }
            skillString += skill + ", ";
        });
        return skillString;
    };

    return (
        <div className='relative flex w-full flex-col items-center justify-center'>
            <div
                onClick={handleClick}
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
                className='relative flex w-full cursor-pointer flex-col items-start justify-center rounded-lg px-[5%] py-[40px] shadow-lg hover:shadow-xl'
                style={{ backgroundColor: props.primarycolor }}
            >
                <h1 className='text-lg font-bold lg:text-3xl' style={{ color: props.secondarycolor }}>
                    {props.title}
                </h1>

                <h2
                    className='mr-5 text-sm font-semibold italic leading-5 lg:text-lg'
                    style={{ color: props.secondarycolor }}
                >
                    {props.role}
                </h2>
                <h2 className='text-xs font-semibold' style={{ color: props.secondarycolor }}>
                    {props.startdate} - {props.enddate}
                </h2>

                <div
                    className='absolute right-[10px] top-[10px] hidden h-[80px] w-[80px] flex-col items-center justify-center rounded-full p-[10px] sm:flex'
                    style={{ backgroundColor: props.secondarycolor }}
                >
                    <div
                        className={`${isHover || isOpen ? "rotate-[30deg]" : "rotate-[10deg]"} hidden transform duration-100 sm:block`}
                    >
                        <img src={props.image} alt={`logo/display for ${props.title}`} />
                    </div>
                </div>
            </div>

            <div
                className={`flex max-h-0 w-full flex-col items-start justify-start overflow-hidden px-[2%] pb-[1%] transition-all duration-300 ease-in-out ${isOpen ? "max-h-[1000px]" : "max-h-0 "}`}
            >
                <p
                    className='mb-3 mt-5 text-left text-sm leading-4 lg:mb-5 lg:text-lg lg:leading-7'
                    style={{ color: props.secondarycolor }}
                >
                    {props.description}
                </p>
                <h2 className='text-[10px] font-semibold italic lg:text-sm' style={{ color: props.secondarycolor }}>
                    {makeSkillString()}
                </h2>
            </div>
        </div>
    );
}
