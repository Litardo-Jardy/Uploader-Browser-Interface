import axios from "axios";

const API_URL = "http://localhost:3000";

export async function uploadFile(
   file: File,
   route: string,
   onProgress?: (percent: number) => void
) {
	
   const token = localStorage.getItem("token");
   console.log(token);
   const formData = new FormData();

   formData.append("name", file.name);
   formData.append("route", route);
   formData.append("file", file);

   const response = await axios.post(
     `${API_URL}/upload_file`,
      formData,
      { 
	headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data"},

        onUploadProgress: (progressEvent) => {
           const percent = Math.round(
             (progressEvent.loaded * 100) /
             (progressEvent.total ?? 1)
           );
           onProgress?.(percent)}
        },
     );

     return response.data}
