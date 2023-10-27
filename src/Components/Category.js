import superLogo from "../Assests/Superapp.png"
import cross from "../Assests/X.png"
import Chips from "./Chips";
import { useState } from "react"

const Category = () => {

    return (
        <div>

            <div className="bg-black h-screen">
                <img src={superLogo} className="absolute w-48 top-20 mx-20"></img>
                <p className="absolute text-white text-[50px] font-[700] w-[500px] top-40 mx-20">Choose your entertainment category</p>
            </div>
            <div className="">
                <Chips />
            </div>

            <div>
                <p className="absolute text-white top-[420px] bg-[#148A08] px-10 py-1 mx-20 rounded-md">Action</p>
                <img src={cross} className="absolute top-[430px] mx-[175px] w-3 cursor-pointer"></img>
            </div>


            <div>
                <p className="absolute text-white top-[420px] bg-[#148A08] px-10 py-1 mx-56 rounded-md">Music</p>
                <img src={cross} className="absolute top-[430px] mx-[315px] w-3 cursor-pointer"></img>
            </div>

            <div>
                <p className="absolute text-white top-[420px] bg-[#148A08] px-10 py-1 mx-[370px] rounded-md">Romance</p>
                <img src={cross} className="absolute top-[430px] mx-[490px] w-3 cursor-pointer"></img>
            </div>

            <button className="absolute bg-[#148A08] top-[630px] mx-[1220px] w-32 py-1 rounded-md text-white">Next Page</button>

        </div>

    )
}

export default Category;