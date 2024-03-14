import {useState} from 'react';

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
    }

    const handleHover = () => {
        setIsHover(prev => !prev);
    }

    const makeSkillString = () => {
        let skillString = '';
        props.skills.forEach(skill => {
            if (skill === props.skills[props.skills.length - 1]) {
                skillString += skill;
                return;
            }
            skillString += skill + ', ';
        })
        return skillString;
    }

    return (
        
            <div className='w-full flex flex-col items-center justify-center relative'>
                    <div onClick={handleClick} onMouseEnter={handleHover} onMouseLeave={handleHover} className="shadow-lg hover:shadow-xl flex flex-col items-start justify-center px-[5%] py-[40px] cursor-pointer rounded-lg relative w-full" style={{backgroundColor: props.primarycolor}}>
                    <h1 className="text-lg lg:text-3xl font-bold" style={{color: props.secondarycolor}}>{props.title}</h1>

                    <h2 className="text-sm lg:text-lg font-semibold italic mr-5 leading-5" style={{color: props.secondarycolor}}>{props.role}</h2>
                    <h2 className="text-xs font-semibold" style={{color: props.secondarycolor}}>{props.startdate} - {props.enddate}</h2>
            
                    <div className='absolute hidden sm:flex top-[10px] right-[10px] flex-col items-center justify-center rounded-full h-[80px] w-[80px] p-[10px]' style={{backgroundColor: props.secondarycolor}}>
                    <div className={`${isHover || isOpen ? 'rotate-[30deg]' : 'rotate-[10deg]'} hidden sm:block transform transition duration-100`}>
                    <img src={props.image} alt="" />
                    </div>
                    </div> 
                    
                </div>
                
                <div className={`flex flex-col items-start justify-start transition-all duration-300 ease-in-out overflow-hidden w-full px-[2%] pb-[1%] max-h-0 ${isOpen ? 'max-h-[1000px]' : 'max-h-0 '}`}>
                    <p className="text-sm text-left lg:text-lg mt-5 mb-3 lg:mb-5 leading-4 lg:leading-7" style={{color: props.secondarycolor}}>{props.description}</p>
                    <h2 className='italic font-semibold text-[10px] lg:text-sm' style={{color: props.secondarycolor}}>{makeSkillString()}</h2>
                </div>
                
            </div>
    )

}

