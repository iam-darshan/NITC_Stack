import { NavLink } from "react-router-dom"
import { House, BookOpen, User } from 'lucide-react'

function BottomNav() {
    return (
        <div className="bottonNavContainer fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 z-50">
            <div className="iconRow flex flex-row justify-between py-2.5 px-8">
                <div className="icons">
                    <NavLink
                        to="/"
                        className="flex flex-col justify-center items-center gap-1.5"
                        style={({ isActive }) => ({
                            color: isActive ? "#175CD3" : "#64748B",
                            textDecoration: "none",
                        })}
                    >
                        <House size={26} />
                        <span>Home</span>
                    </NavLink>
                </div>
                <div className="icons">
                    <NavLink
                        to="/explore"
                        className="flex flex-col justify-center items-center gap-1.5"
                        style={({ isActive }) => ({
                            color: isActive ? "#175CD3" : "#64748B",
                            textDecoration: "none",
                        })}
                    >
                        <BookOpen size={26} />
                        <span>Explore</span>
                    </NavLink>
                </div>
                <div className="icons">
                    <NavLink
                        to="/profile"
                        className="flex flex-col justify-center items-center gap-1.5"
                        style={({ isActive }) => ({
                            color: isActive ? "#175CD3" : "#64748B",
                            textDecoration: "none",
                        })}
                    >
                        <User size={26} />
                        <span>Profile</span>
                    </NavLink>
                </div>
            </div>
        </div >
    )
}

export default BottomNav