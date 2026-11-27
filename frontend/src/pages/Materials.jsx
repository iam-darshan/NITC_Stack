import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
// import { materials } from '../data/materials';
import { courses } from '../data/courses'
import { ArrowLeft, EllipsisVertical, BookOpen, Upload, Download } from 'lucide-react';
import pdfIcon from '../assets/pdfIcon.svg'

function Materials() {
    const { courseCode, categoryID } = useParams();
    const [materials, setMaterials] = useState([])
    const [activeMenu, setActiveMenu] = useState()

    const fetchMaterials = async () => {
        try {
            const res = await fetch("http://127.0.0.1:8000/materials")
            const data = await res.json()
            setMaterials(data)
        } catch {
            console.log("Unable to retrieve material");
        }

    }



    const materialList = materials.filter((course) =>
        course.courseCode == courseCode &&
        course.category == categoryID
    )
    const course = courses.find(course => course.code === courseCode)
    if (!course) {
        return <div>Course not found</div>;
    }

    const toggleMenu = (id) => {
        if (id !== activeMenu)
            setActiveMenu(id)
        else
            setActiveMenu(null)
    }

    const handleDownload = async (id) => {
        const res = await fetch(`http://127.0.0.1:8000/download?q=${id}`)
    }




    useEffect(() => {
        fetchMaterials()
    }, [])

    return (
        <div className='flex flex-col p-3'>
            <button
                onClick={() => window.history.back()}
                className="mb-5 flex items-center gap-2 text-sm text-[#173B5E]"
            >
                <ArrowLeft size={18} />
                Back
            </button>
            <div className="flex items-center gap-3 rounded-xl py-3 mb-4">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-teal-100">
                    <BookOpen size={28} className="text-teal-800" />
                </div>

                <div className="flex flex-col gap-1 grow">
                    <h1 className="text-xl font-bold text-[#173B5E]">
                        {course.name}
                    </h1>

                    <span className="text-xs text-slate-600">
                        {course.code} · Course Resources
                    </span>
                </div>

                <Link className="uploadBtn flex items-center justify-center gap-2 w-fit px-4 py-2 rounded-xl border border-[#173B5E] text-[#173B5E]"
                    to="./upload"
                >
                    <Upload size={18} />
                    <span>Upload</span>
                </Link>

            </div>
            <div className="materialRow flex flex-col gap-4">

                {materialList.map((material) => (
                    <div className='materialCard w-full flex flex-row justify-between gap-2 items-center'>
                        <a
                            href={material.fileURL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-1 gap-2 items-center"
                        >
                            <div>
                                <img src={pdfIcon} alt="PDF" width={30} />
                            </div>

                            <div className="grow">
                                <span>{material.title}</span>
                            </div>
                        </a>
                        <button className='relative' onClick={() => toggleMenu(material.id)}>
                            <EllipsisVertical />
                            {activeMenu === material.id && (
                                <div className="toggleMenu absolute right-0 shadow-md shadow-blue-500/40 p-2 rounded-lg bg-blue-100
                                
                                z-50">

                                    <a
                                        href={`http://127.0.0.1:8000/download/${material.id}`}
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2"
                                    >
                                        <Download size={18} />
                                        Download
                                    </a>

                                </div>
                            )}
                        </button>


                    </div>
                ))}
            </div>
        </div>
    )
}

export default Materials