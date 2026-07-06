import React from 'react'
import { Link } from 'react-router-dom'
import { IoChevronDown } from 'react-icons/io5'
import Logo from '../assets/logo.svg'

const NAV_LINKS = [
    { label: 'Services', to: '/services', dropdown: true },
    { label: 'Company', to: '/company', dropdown: true },
    { label: 'Sign in', to: '/signin' },
]

const Navbartest = () => {
    return (
        <header className="relative bg-[#191d55]">
            <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 1440 190"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                <defs>
                    <linearGradient id="navBand" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0" stopColor="#4c2fae" />
                        <stop offset="0.5" stopColor="#6a4ad5" />
                        <stop offset="1" stopColor="#3f2596" />
                    </linearGradient>
                </defs>
                <path
                    d="M0 10 C 240 -6, 480 20, 720 9 C 960 -2, 1200 16, 1440 5 L1440 118 C 1200 175, 980 96, 720 132 C 470 166, 230 104, 0 148 Z"
                    fill="url(#navBand)"
                />
                <path
                    d="M0 28 C 260 10, 520 38, 780 25 C 1020 14, 1240 34, 1440 21"
                    fill="none"
                    stroke="rgba(255,255,255,0.14)"
                    strokeWidth="1.5"
                />
                <path
                    d="M0 130 C 250 166, 500 94, 760 122 C 1010 148, 1240 88, 1440 108"
                    fill="none"
                    stroke="rgba(255,255,255,0.18)"
                    strokeWidth="1.5"
                />
            </svg>

            <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 pb-16 pt-7 lg:px-10">
                <Link to="/" className="border border-white/90 px-3 py-2">
                    <img src={Logo} alt="waves logo" className="h-6" />
                </Link>

                <div className="flex items-center gap-9 text-[15px] text-white">
                    <ul className="hidden items-center gap-9 md:flex">
                        {NAV_LINKS.map(({ label, to, dropdown }) => (
                            <li key={to}>
                                <Link
                                    to={to}
                                    className="flex items-center gap-1.5 hover:text-indigo-200"
                                >
                                    {label}
                                    {dropdown && <IoChevronDown className="text-xs" />}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link
                        to="/get-started"
                        className="rounded-lg bg-[#6e56dd] px-7 py-3 font-medium ring-1 ring-white/25 transition-colors hover:bg-[#7d68ea]"
                    >
                        Get Started
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbartest
