import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { branches } from '../data/branches'
import { courses } from "../data/courses";
import { curriculum } from "../data/curriculum";
import { BookOpen,ChevronRight,ArrowLeft } from 'lucide-react';

function SemesterSubjects() {
    const { branchID, semID } = useParams()
    const branch = branches.find(item => item.id === branchID)
    const courseCodes = curriculum[branchID]?.[semID] ?? []
    const semesterCourses = courseCodes.map((code) =>
        courses.find((course) => course.code === code)
    )

    return (
        <div className="flex flex-col gap-2 p-4">
            <button
        onClick={() => window.history.back()}
        className="mb-5 flex items-center gap-2 text-sm text-[#173B5E]"
      >
        <ArrowLeft size={18} />
        Back
      </button>

            <div className="mb-4">
                <h1 className="text-2xl font-bold text-[#173B5E]">
                    {branch.name}
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                    Semester {semID} · {semesterCourses.length} Subjects
                </p>
            </div>
            {semesterCourses.map((course) => (

                <Link
                    key={course.code}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition-colors hover:border-blue-300 hover:bg-blue-50"
                    to={`../../courses/${course.code}`}
                >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100">
                        <BookOpen size={22} className="text-blue-700" />
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col gap-1">
                        <h3 className="font-semibold text-[#173B5E]">
                            {course.name}
                        </h3>

                        <p className="text-xs text-slate-500">
                            {course.code} · {course.department}
                        </p>
                    </div>

                    <ChevronRight size={18} className="shrink-0 text-slate-400" />
                </Link>

            ))}
        </div>
    )
}

export default SemesterSubjects