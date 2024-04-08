"use client"

import { faBars, faSun, faXmark } from "@fortawesome/free-solid-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

export default function Header() {
    const [mobileMenuShow, setMobileMenuShow] = useState(false)

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle("dark")
    }
    return (
        <>
            <nav className="fixed z-10 w-full flex justify-between align-center py-[28px] pl-[40px] pr-[50px] bg-white dark:bg-slate-900 shadow-[0_0_10px_rgba(0,0,0,0.09)]">
                <span
                    onClick={toggleDarkMode}
                    className="absolute right-10 ml-8 border-2 border-slate-300 dark:border-white pl-1 pr-1 p-1"
                >
                    <FontAwesomeIcon
                        icon={faSun}
                        className="text-4xl text-yellow-500 hover:text-black dark:hover:text-white animate-spin-slow"
                    />
                </span>
                <h3 className="font-bold text-3xl hover:cursor-pointer dark:text-white">
                    Tokunaga-X
                </h3>

                <FontAwesomeIcon
                    icon={faBars}
                    className="text-4xl block sm:!hidden"
                    onClick={() => setMobileMenuShow(!mobileMenuShow)}
                />

                <ul className="sm:flex gap-8 hidden pr-12">
                    <li className="nav-li">
                        <a href="#home">Home</a>
                    </li>
                    <li className="nav-li">
                        <a href="#about">About</a>
                    </li>
                    <li className="nav-li">
                        <a href="#projects">Projects</a>
                    </li>
                    <li className="nav-li">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>

            {mobileMenuShow ? (
                <ul
                    className="gap-10 fixed w-screen h-screen bg-yellow-50 z-10 flex flex-col justify-center items-center"
                    id="headerSub"
                >
                    <FontAwesomeIcon
                        icon={faXmark}
                        className="w-10 h-10 absolute right-4 top-4"
                        onClick={() => setMobileMenuShow(!mobileMenuShow)}
                    />

                    <li
                        className="nav-li"
                        onClick={() => setMobileMenuShow(!mobileMenuShow)}
                    >
                        <a href="#home">Home</a>
                    </li>
                    <li
                        className="nav-li"
                        onClick={() => setMobileMenuShow(!mobileMenuShow)}
                    >
                        <a href="#about">About</a>
                    </li>
                    <li
                        className="nav-li"
                        onClick={() => setMobileMenuShow(!mobileMenuShow)}
                    >
                        <a href="#projects">Projects</a>
                    </li>
                    <li
                        className="nav-li"
                        onClick={() => setMobileMenuShow(!mobileMenuShow)}
                    >
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            ) : (
                ""
            )}
        </>
    )
}
