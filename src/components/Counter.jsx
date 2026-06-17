import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const [darkMode, setDarkMode] = useState(false)

    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)
    const reset = () => setCount(0)
    const toggleDarkMode = () => setDarkMode(!darkMode)

    return (
        <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} p-10 rounded-lg min-h-screen transition-all duration-300`}>
            <button
                onClick={toggleDarkMode}
                className={`${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'} px-5 py-2 mb-8 cursor-pointer rounded-md text-sm font-bold border border-gray-300 hover:opacity-80 transition-opacity`}
            >
                {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>

            <div className="text-center mt-16">
                <h1 className="text-4xl font-bold mb-10">Counter App</h1>

                <div className={`text-8xl font-bold my-10 transition-colors duration-300 ${count < 0 ? 'text-red-500' : darkMode ? 'text-white' : 'text-black'}`}>
                    {count}
                </div>

                <div className="mb-8 flex justify-center gap-3">
                    <button
                        onClick={increment}
                        className="px-6 py-3 cursor-pointer text-lg bg-green-500 text-white rounded-md font-bold hover:bg-green-600 transition-colors"
                    >
                        +
                    </button>
                    <button
                        onClick={decrement}
                        className="px-6 py-3 cursor-pointer text-lg bg-red-500 text-white rounded-md font-bold hover:bg-red-600 transition-colors"
                    >
                        -
                    </button>
                    <button
                        onClick={reset}
                        className="px-6 py-3 cursor-pointer text-lg bg-blue-500 text-white rounded-md font-bold hover:bg-blue-600 transition-colors"
                    >
                        Reset
                    </button>
                </div>

                {count > 10 && (
                    <div className={`text-2xl ${darkMode ? 'text-yellow-400' : 'text-orange-600'} mt-10 font-bold`}>
                        Limit
                    </div>
                )}
            </div>
        </div>
    )
}

export default Counter
