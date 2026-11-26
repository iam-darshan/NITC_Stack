import React from 'react'
import { CircleCheck, ArrowUpRight } from 'lucide-react'

function SemCard() {
    return (
        <div className="semCard w-[95%] bg-[#173B5E] rounded-xl text-white p-4 flex flex-col gap-5 font-text">

            <div className="mySem flex justify-between items-center text-xs font-medium text-blue-200">
                <span className="uppercase tracking-wider">
                    My Semester
                </span>

                <span className="flex items-center gap-1">
                    <CircleCheck size={16} />
                    Current
                </span>
            </div>

            <div className="semDetails">
                <h2 className="text-2xl font-semibold">
                    Semester 1
                </h2>

                <h4 className="text-sm text-blue-100">
                    Mathematics & Computing
                </h4>
            </div>

            <div className="border-t border-white/20 pt-3 flex justify-between items-center text-sm">
                <span>Explore semester materials</span>
                <ArrowUpRight size={18} />
            </div>

        </div>
    )
}

export default SemCard