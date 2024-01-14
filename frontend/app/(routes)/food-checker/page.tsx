"use client";
import axios from "axios";
import Link from "next/link";
import { BaseSyntheticEvent, useEffect, useState } from "react"

export default function FoodChecker(){

    const [image, setImage] = useState<File | null>(null);
    const [result, setResult] = useState<{food: "apple" | "banana" | "orange", status: "Rotten" | "Safe to eat"} | null>({food:"apple", status: "Rotten"})

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
        <main className="p-12 z-50">
            <h1 className="text-center text-5xl font-bold">
                Rot or Not?
            </h1>
            <h5 className="text-sm italic text-center mt-5">
                Upload an image below to have our image recognition model 
                detect whether the food is safe to eat
            </h5>
            <div className="flex justify-center mt-8">
                <form>
                    <input onChange={handleChange} multiple = {false} className="w-60" type="file" name="" id="" accept="image/jpg, image/png"/>
                </form>
            </div>
            <div className="flex justify-center mt-8">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleUpload}> Upload image</button>
            </div>

            {(result && image)?
            <div className="flex justify-center mt-6">
                <div className="bg-white rounded-xl w-fit max-w-[36rem] w-fit h-fit p-6">
                    <h4 className="text-center text-xl font-semibold">
                        Our model detected the image was of a:
                    </h4>
                    <h5 className="text-center text-lg">
                        {result.status} {result.food}
                    </h5>
                    <div className="flex mt-3 z-10 justify-around">
                        <div className="min-w-28 min-h-28 rounded-xl overflow-hidden">
                            <img className="cover-fit" src={URL.createObjectURL(image)} alt="" />
                        </div>
                        {result.status == "Rotten"?
                            <div className="mx-4 max-w-[22rem] text-center">
                                <span className="text-sm">
                                    The food is unsafe to eat! Although our model does make mistakes, it is advisable to refrain from eating the 
                                    food in the image. If you have problems with food insecurity, we reccommend you contact the following U.N endorsed services for those in need:
                                    <span> </span>
                                    <Link className="font-semibold" href = {"https://feedontario.ca/ "}>
                                     Feed Ontario,
                                    </Link>
                                    <span> </span>
                                    <Link className="font-semibold" href = {"https://foodbankscanada.ca/ "}>
                                     Foodbanks Canada
                                    </Link>                
                                </span>
                            </div>
                            :
                            <div className="mx-4 max-w-[20rem] text-center">
                                <span className="text-sm ">
                                    The food is okay to eat! Although our model does make mistakes, 
                                    you can be more certain the food you're eating won't cause you any adverse health effects.
                                </span>
                            </div>
                            }
                    </div>
                </div>

            </div>

            :
            null
            }

        </main>
    )

}