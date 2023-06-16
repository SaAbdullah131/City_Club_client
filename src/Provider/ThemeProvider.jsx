import React, { createContext, useEffect, useState } from 'react';


export const ThemeContext =createContext(null);

const ThemeProvider = ({children}) => {
    const [dark,setDark] = useState(true);
    const userThemeMode = localStorage.getItem('isDark');
    if(!userThemeMode){
        localStorage.setItem('isDark','true');
    }
    useEffect(()=>{
        if(userThemeMode === 'true'){
            setDark(true);
        } else {
            setDark(false);
        }
    },[]);

    const handleThemeToggle = ()=> {
        if(dark){
            localStorage.setItem('isDark','false');
        } else {
            localStorage.setItem('isDark','true');
        }
        setDark(!dark);
    }
    const aboutTheme = {
        dark,
        handleThemeToggle

    }
    return (
        <ThemeContext.Provider value={aboutTheme}>
                {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;