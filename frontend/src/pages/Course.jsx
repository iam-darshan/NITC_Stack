
import React from "react";
import { useParams, Link } from "react-router-dom";
import { courses } from "../data/courses";
import {
  ArrowLeft,
  FileText,
  BookOpen,
  Files,
  ClipboardList,
  LibraryBig
} from "lucide-react";

function Course() {
  const { courseCode } = useParams();

  const course = courses.find(
    (item) => item.code === courseCode
  );

  if (!course) {
    return <div className="p-4">Course not found</div>;
  }

  const categories = [
    { id:"notes", name: "Notes", icon: FileText, description: "Lecture notes" },
    { id:"tutorials", name: "Tutorials", icon: BookOpen, description: "Practice sheets" },
    { id:"pyqs" ,name: "PYQs", icon: Files, description: "Previous papers" },
    { id:"assignments" ,name: "Assignments", icon: ClipboardList, description: "Coursework" },
    { id:"textbook" ,name: "Textbooks", icon: LibraryBig,description: "Reference Books"}
  ];

  return (
    <div className="min-h-screen bg-[#F7F5EE] px-4 py-5 pb-24 font-text">

      <button
        onClick={() => window.history.back()}
        className="mb-5 flex items-center gap-2 text-sm text-[#173B5E]"
      >
        <ArrowLeft size={18} />
        Back
      </button>

      <div className="mb-7">
        <p className="mb-2 text-sm font-medium text-blue-700">
          {course.code}
        </p>

        <h1 className="text-2xl font-bold text-[#173B5E]">
          {course.name}
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          {course.department}
        </p>
      </div>

      <h2 className="mb-4 text-lg font-bold text-[#173B5E]">
        Study Materials
      </h2>

      <div className="grid grid-cols-2 gap-3">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <Link
              key={category.name}
              className="flex min-h-36 flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 transition-colors hover:border-blue-300 hover:bg-blue-50"
              to={`./${category.id}`}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100">
                <Icon size={22} className="text-blue-700" />
              </div>

              <div>
                <h3 className="font-semibold text-[#173B5E]">
                  {category.name}
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  {category.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Course;
