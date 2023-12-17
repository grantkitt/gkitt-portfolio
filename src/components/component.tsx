import React, {useState} from 'react';

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

    const responsiveStyles = {
        common: {
          // Common styles
          width: `${Math.floor(props.imagewidth / 2.5)}px`,
          top: '-20px',
          right: `-${Math.floor(props.imagewidth / 5)}px`,
        },
        mediaQuery: {
            '@media (min-width: 1024px)': {
              width: `${Math.floor(props.imagewidth * 0.9)}px`,
              top: '-40px',
              right: `-${Math.floor((props.imagewidth * 0.9) / 2)}px`,
            },
          },
      };

      const mediaQueryStyle = window.matchMedia('(min-width: 1024px)').matches
      ? responsiveStyles.mediaQuery['@media (min-width: 1024px)']
      : {};


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
        
            <div className='w-[90%] lg:w-[80%] flex flex-col items-center justify-center relative'>
                    <div onClick={handleClick} onMouseEnter={handleHover} onMouseLeave={handleHover} className="shadow-lg hover:shadow-xl flex flex-col items-start justify-center px-[5%] py-[5%] cursor-pointer rounded-lg relative w-full" style={{backgroundColor: props.primarycolor}}>
                    <h1 className="text-lg font-bold" style={{color: props.secondarycolor}}>{props.title}</h1>

                    <h2 className="text-sm font-semibold italic mr-5 leading-5" style={{color: props.secondarycolor}}>{props.role}</h2>
                    <h2 className="text-xs font-semibold" style={{color: props.secondarycolor}}>{props.startdate} - {props.enddate}</h2>
            
                    <div className='absolute top-0 right-0 rounded-tr-lg rounded-bl-full h-[30px] w-[30px] lg:h-[60px] lg:w-[60px]' style={{backgroundColor: props.secondarycolor}}></div> 
                    <div style={{
                        ...responsiveStyles.common,
                        ...mediaQueryStyle,}}
                    className={`absolute ${isHover || isOpen ? 'rotate-[30deg]' : 'rotate-[10deg]'} transform transition duration-100`}>
                    <img src={props.image} alt="" />
                    </div>
                </div>
                
                <div className={`flex flex-col items-start justify-start transition-all duration-300 ease-in-out overflow-hidden w-full px-[2%] pb-[1%] max-h-0 ${isOpen ? 'max-h-[1000px]' : 'max-h-0 '}`}>
                    <p className="text-sm text-left lg:text-lg mt-5 mb-3 lg:mb-5 leading-4 lg:leading-7" style={{color: props.primarycolor}}>{props.description}</p>
                    <h2 className='italic font-semibold text-[10px] lg:text-sm' style={{color: props.primarycolor}}>{makeSkillString()}</h2>
                </div>
                
            </div>
    )

}

