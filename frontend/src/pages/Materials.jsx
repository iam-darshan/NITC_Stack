import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
// import { materials } from '../data/materials';
import { courses } from '../data/courses'
import { ArrowLeft, EllipsisVertical, BookOpen } from 'lucide-react';
import pdfIcon from '../assets/pdfIcon.svg'

function Materials() {
    const { courseCode, categoryID } = useParams();
    const [materials, setMaterials] = useState([])

    const fetchMaterials = async () =>{
        try{
            const res = await fetch("http://127.0.0.1:8000/materials")
            const data = await res.json()
            setMaterials(data)
        } catch {
            console.log("Unable to retrieve material");
        }
        
    }

    useEffect(() => {
      fetchMaterials()
    }, [])
    

    const materialList = materials.filter((course) =>
        course.courseCode == courseCode &&
        course.category == categoryID
    )
    const course = courses.find(course => course.code === courseCode)
    if (!course) {
    return <div>Course not found</div>;
    }

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

                <div className="flex flex-col gap-1">
                    <h1 className="text-xl font-bold text-[#173B5E]">
                        {course.name}
                    </h1>

                    <span className="text-xs text-slate-600">
                        {course.code} · Course Resources
                    </span>
                </div>

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
                        <EllipsisVertical />

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Materials