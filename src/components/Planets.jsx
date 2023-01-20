import React from 'react'
import { Outlet } from 'react-router-dom'
const Planets = () => {
    return (
        <div>
            <h1>Planets</h1>
            <Outlet />
        </div>
    )
}

export default Planets