import React from 'react'

function Button({children , version , href}) {
    return (
        <a
            href={href}
            className={`p-4 px-8 rounded-full shadow-lg bg-${version} duration-200 hover:opacity-80`}
        >
            {children}
        </a>
    )
}

export default Button