"use client"

import { createContext, useState } from "react"

const DarkModeContxt = createContext({
    darkMode: false,
    toggleDarkMode: () => {},
})

function DarkModeProvider(props: any) {
    const [darkMode, setDarkMode] = useState(true)

    const toggleDarkMode = () => {
        setDarkMode(prev => !prev)
        document.documentElement.classList.toggle("dark")
    }

    return (
        <DarkModeContxt.Provider value={{ darkMode, toggleDarkMode }}>
            {props.children}
        </DarkModeContxt.Provider>
    )
}

export { DarkModeContxt, DarkModeProvider }
