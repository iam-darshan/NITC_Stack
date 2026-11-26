import React from 'react'
import { Book,ChevronRight } from 'lucide-react'

const courses = [
    {
        "title":"Mathematics 1",
        "courseCode": "MA1002E"
    },
    {
        "title":"Programming with C++",
        "courseCode": "MA1006E"
    },
    {
        "title":"Discrete Mathematics",
        "courseCode": "MA1007E"
    },
    {
        "title":"Professional Communication",
        "courseCode": "MA1002E"
    },
    {
        "title":"Physics of Materials",
        "courseCode": "MA1002E"
    }

]
const colors = [
  { bg: "bg-blue-100", text: "text-blue-700" },
  { bg: "bg-green-100", text: "text-green-700" },
  { bg: "bg-purple-100", text: "text-purple-700" },
  { bg: "bg-amber-100", text: "text-amber-700" },
  { bg: "bg-pink-100", text: "text-pink-700" },
  { bg: "bg-cyan-100", text: "text-cyan-700" },
  { bg: "bg-orange-100", text: "text-orange-700" },
  { bg: "bg-teal-100", text: "text-teal-700" },
];


function Subjects() {


  return (
    <div className='mySubjects w-full font-text px-2'>
        <div className="head flex flex-row justify-between p-3">
            <span className='font-semibold text-2xl'>My Subjects</span>
            <span>View All</span>
        </div>
        <div className="courseList flex flex-col gap-3">
            {
                courses.slice(0,3).map((course,index)=>
                    {
                        const colour = colors[index%colors.length]
                    return (
                    <div key={`${course.courseCode}-${index}`}
                        className={`courseCard w-full flex flex-row items-center gap-3 rounded-2xl p-4 ${colour.bg}`}>
                        <div className="bookIcon flex h-12 w-12 items-center justify-center rounded-xl bg-white">
                            <Book className={colour.text}/>
                        </div>
                        <div className="courseDet flex flex-col grow">
                            <span className='font-semibold text-sm text-[#173B5E]'>{course.title}</span>
                            <span className='text-gray-800'>{course.courseCode}</span>
                        </div>
                        <div className='flex justify-center'>
                            <ChevronRight className={colour.text}/>
                        </div>
                    </div>
                )})
            }
        </div>

    </div>
  )
}

export default Subjects