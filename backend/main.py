from fastapi import FastAPI,UploadFile,Form
from fastapi.middleware.cors import CORSMiddleware
import shutil,uuid,json
from fastapi.staticfiles import StaticFiles

app = FastAPI()
app.mount("/files",StaticFiles(directory="upload"),name="files")

origin = [
    "http://localhost:5173",
    "https://localhost:5174"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origin,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]

)

@app.get("/materials")
def sendMaterial():
    with open("./materials.json","r") as f:
        materials = json.load(f)
    return materials

@app.post("/upload")
def uploadFile(
        file: UploadFile,
        title: str = Form(),
        courseCode: str= Form(...),
        categoryID: str= Form(...),
    ):
    docName = str(uuid.uuid4())
    url = "./upload/"+docName+".pdf"
    with open(url,"wb") as f:
        shutil.copyfileobj(file.file,f)
    with open("./materials.json","r") as f:
        materials = json.load(f)
    newMaterial = {
        "id":docName,
        "title":title,
        "courseCode":courseCode,
        "category":categoryID,
        "fileURL":"http://127.0.0.1:8000/files/" + docName + ".pdf"
    }
    materials.append(newMaterial)
    with open("./materials.json","w") as f:
        json.dump(materials,f,indent=4)

    return {"message" : "File saved"}