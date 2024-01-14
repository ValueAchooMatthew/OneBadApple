"use client";
import axios from "axios";
import { BaseSyntheticEvent, useEffect, useState } from "react"

export default function FoodChecker(){

    const [image, setImage] = useState<File | null>(null);

    const handleChange = (event: BaseSyntheticEvent)=>{
        event.preventDefault();
        if(event.target instanceof HTMLInputElement ){
            if(event.target.files){
                const file = event.target.files[0];
                setImage(file);
            }
        }else{
            console.log("balls")
        }
    }
    const handleUpload = async () => {
        if (image) {
          const formData = new FormData();
          formData.append("image", image);
    
          try {
            await axios.post("http://localhost:5000/upload", formData);
            console.log("Image uploaded successfully");
          } catch (error) {
            console.error("Error uploading image:", error);
          }
        }
      };

    return(
        <main className="p-12">
            <h1 className="text-center text-5xl font-bold">
                Rot or Not?
            </h1>
            <div className="flex justify-center mt-12">
                <form>
                    <input onChange={handleChange} multiple = {false} className="w-60" type="file" name="" id="" accept="image/jpg, image/png"/>
                </form>
            </div>
            {image?
                <div className="flex justify-center mt-12">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleUpload}> Upload image</button>
                </div>
            :
            null
            }
        </main>
    )

}