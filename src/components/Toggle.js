import React, { useContext } from 'react'
import { ThemeContext } from './darkMode';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

const Toggle = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        theme === 'dark' ?
            <BsFillMoonStarsFill className="fill-white h-6 w-6" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
            : <BsFillSunFill className='fill-yellow-300 h-10 w-10"
            ' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />


    )
}

export default Toggle