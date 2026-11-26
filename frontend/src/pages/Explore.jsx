
import React, { useState } from "react";
import { branches } from "../data/branches";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

function Explore() {
  const [selectedBranch, setSelectedBranch] = useState("mnc");

  const branch = branches.find(
    (item) => item.id === selectedBranch
  );
  const semesters = Array.from(
    { length: branch.semesters },
    (_, index) => index + 1
  );

  return (
    <div className="explore font-text">

      <div className="heading flex flex-col p-3">
        <span className="text-3xl font-bold">
          Explore
        </span>
        <span className="text-gray-600">
          Browse resources across branches
        </span>
      </div>

      <div className="branchSelector flex gap-3 overflow-x-auto px-3 py-3">
        {branches.map((item) => {
          const isSelected = selectedBranch === item.id;

          return (
            <button
              type="button"
              key={item.id}
              className={`flex min-h-32 min-w-36 flex-col
                items-start justify-between rounded-2xl border
                p-4 text-left transition-colors
                ${isSelected
                  ? "border-[#173B5E] bg-[#173B5E] text-white"
                  : "border-slate-200 bg-white text-[#173B5E]"
                }`}
              onClick={() => setSelectedBranch(item.id)}
            >
              <span className="text-xl font-bold">
                {item.shortName}
              </span>

              <span className={`text-xs ${isSelected ? "text-blue-100" : "text-gray-500"
                }`}>
                {item.name}
              </span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-3 p-3 py-5">
        {semesters.map((semester) => (
          <Link
            key={semester}
            to={`/branches/${selectedBranch}/semesters/${semester}`}
            className="semCard rounded-xl bg-white border px-4 flex flex-row gap-2 h-15 items-center"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100">
              <BookOpen size={22} className="text-blue-700" />
            </div>

            Semester {semester}
          </Link>
        ))}

      </div>

    </div>
  );
}

export default Explore;
