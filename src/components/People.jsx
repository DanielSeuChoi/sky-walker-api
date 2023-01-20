import React from 'react'
import { Outlet } from 'react-router-dom'

const People = () => {
    return (
        <div>
            <h1>Characters</h1>
            <Outlet />
        </div>
    )
}

export default People