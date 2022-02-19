import React from 'react'
import { Link } from 'react-router-dom'

export const AboutPage: React.FC = () => {
    return (
        <>
            <div className="container">
                <h1>AboutPage</h1>
                <p>Hello, this is about page</p>
                <Link to='/' className='btn'>Back to todo list</Link>
            </div>

        </>
    )
}
