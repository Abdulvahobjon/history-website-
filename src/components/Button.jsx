import React from 'react'

function Button({children}) {
    return (
        <a
            href="#"
            className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80"
        >
            {children}
        </a>
    )
}

export default Button