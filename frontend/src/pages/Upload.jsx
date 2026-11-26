import { ArrowLeft } from 'lucide-react'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function Upload() {
    const { courseCode, categoryID } = useParams()
    const [fileTitle, setFileTitle] = useState("")
    const [file, setFile] = useState()

    const handleUpload = async (e) => {
        e.preventDefault();

        console.log(fileTitle);
        console.log(file);
        if (!file) {
            alert("Please select a file");
            return;
        }

        if (file.type !== "application/pdf") {
            alert("Only PDF files are allowed");
            return;
        }

        const formData = new FormData();
        formData.append("title",fileTitle)
        formData.append("courseCode",courseCode)
        formData.append("categoryID",categoryID)
        formData.append("file",file)

        try{
            const res = await fetch("http://127.0.0.1:8000/upload",{
                method:"POST",
                body: formData
            })
            console.log(await res.json())
        } catch (e){
            console.error(e)
        }
    }


    return (
        <div>
            <div className='flex flex-row gap-3 items-center mb-5 p-3'>
                <button
                    onClick={() => window.history.back()}
                    className="flex gap-2 text-sm text-[#173B5E] items-center"
                >
                    <ArrowLeft size={18} />
                    Back
                </button>
                <span className='font-text font-normal text-xl'>Upload Resources</span>
            </div>
            <div>
                <form onSubmit={handleUpload} className='flex flex-col gap-4 p-5 font-text'>
                    <label>File Title</label>
                    <input
                        type="text"
                        placeholder="Enter file title"
                        className="rounded-lg border border-slate-300 p-3"
                        required
                        onChange={(e) => {
                            setFileTitle(e.target.value)
                        }}
                    />
                    <label>Select PDF</label>

                    <div className='border w-fit rounded-lg p-1'>
                        <input
                            type="file"
                            accept=".pdf"
                            required
                            onChange={(e) =>
                                setFile(e.target.files[0])
                            }
                        />
                    </div>
                    <button
                        type="submit"
                        className="rounded-xl bg-[#173B5E] p-3 text-white"
                    >
                        Upload

                    </button>
                </form>
            </div>
        </div>
    )
}

export default Upload