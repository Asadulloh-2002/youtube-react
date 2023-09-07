import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../../components'

const MainLayout = () => {
    return (
        <div>
            <header><NavBar /></header>
            <main><Outlet /></main>
        </div>
    )
}

export default MainLayout