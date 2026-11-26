import React from 'react'
import { Outlet } from 'react-router-dom'
import BottomNav from './BottomNav'
import Navbar from './Navbar'

function Layout() {
    return (
        <div className="min-h-screen">
            <Navbar />

            <main className="pb-24">
                <Outlet />
            </main>

            <BottomNav />
        </div>
    )
}

export default Layout